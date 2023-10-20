import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaModalComponent } from './pelicula-modal.component';

describe('PeliculaModalComponent', () => {
  let component: PeliculaModalComponent;
  let fixture: ComponentFixture<PeliculaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculaModalComponent]
    });
    fixture = TestBed.createComponent(PeliculaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
