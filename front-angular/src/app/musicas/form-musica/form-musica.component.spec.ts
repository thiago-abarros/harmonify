import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMusicaComponent } from './form-musica.component';

describe('FormMusicaComponent', () => {
  let component: FormMusicaComponent;
  let fixture: ComponentFixture<FormMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormMusicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
