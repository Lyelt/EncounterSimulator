import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AvailableCharacter } from 'src/models/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
    form: FormGroup;
    character: AvailableCharacter;

    isNpc: boolean;
    quantity: number;

    constructor(private fb: FormBuilder,
                private dialogRef: MatDialogRef<AddCharacterComponent>,
                @Inject(MAT_DIALOG_DATA) data) {
        this.character = data;
        this.isNpc = this.character.owner == null || this.character.owner.toLowerCase() == 'npc';
        this.quantity = 1;
    }

    ngOnInit() {
        this.form = this.fb.group({
            id: [this.character.id],
            name: [this.character.name, Validators.required],
            speed: [this.character.speed, [Validators.required, Validators.min(0)]],
            ac: [this.character.ac, [Validators.required, Validators.min(0)]],
            maxHP: [this.character.maxHP, [Validators.required, Validators.min(0)]],
            owner: [this.character.owner],
            dexModifier: [this.character.dexModifier],
            quantity: [this.quantity, [Validators.min(1)]]
        });

        this.checkNpc();
    }

    checkNpc() {
        if (this.isNpc) {
            this.form.get('owner').disable();
            this.form.get('quantity').enable();
        }
        else {
            this.form.get('owner').enable();
            this.form.get('quantity').disable();
        }
    }

    save() {
        this.dialogRef.close({ character: this.form.value, quantity: this.quantity });
    }

    close() {
        this.dialogRef.close();
    }
}
