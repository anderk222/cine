import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculaFiltrosComponent } from './pelicula-filtros.component';

describe('PeliculaFiltrosComponent', () => {
  let component: PeliculaFiltrosComponent;
  let fixture: ComponentFixture<PeliculaFiltrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeliculaFiltrosComponent]
    });
    fixture = TestBed.createComponent(PeliculaFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
