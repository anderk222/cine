import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaToolbarComponent } from './pelicula-toolbar.component';

describe('PeliculaToolbarComponent', () => {
  let component: PeliculaToolbarComponent;
  let fixture: ComponentFixture<PeliculaToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculaToolbarComponent]
    });
    fixture = TestBed.createComponent(PeliculaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
