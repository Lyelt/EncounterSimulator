import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatStepperModule, MatInputModule, MatFormFieldModule,
    MatAutocompleteModule, MatCardModule, MatDatepickerModule, MatNativeDateModule,
    MatExpansionModule, MatToolbarModule, MatSnackBarModule, MatMenuModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatDialogModule, MatTableModule, MatSortModule, MatCheckboxModule,
    MatIconModule, MatTooltipModule
} from '@angular/material';

const modules = [
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule
]

@NgModule({
    imports: [...modules],
    exports: [...modules],
})

export class MaterialModule { }
