import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicasComponent } from './musicas.component';

describe('MusicasComponent', () => {
  let component: MusicasComponent;
  let fixture: ComponentFixture<MusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
