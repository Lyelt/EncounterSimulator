import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCharactersComponent } from './available-characters.component';

describe('AvailableCharactersComponent', () => {
  let component: AvailableCharactersComponent;
  let fixture: ComponentFixture<AvailableCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCharactersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
