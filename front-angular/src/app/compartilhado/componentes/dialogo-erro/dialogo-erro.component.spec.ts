import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoErroComponent } from './dialogo-erro.component';

describe('DialogoErroComponent', () => {
  let component: DialogoErroComponent;
  let fixture: ComponentFixture<DialogoErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogoErroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
