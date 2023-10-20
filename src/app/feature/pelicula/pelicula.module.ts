import { NgModule } from '@angular/core';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PeliculaToolbarComponent } from './pelicula-toolbar/pelicula-toolbar.component';
import { RouterOutlet } from '@angular/router';
import { PeliculaRoutingModule } from './pelicula-routing.module';
import { SearchPeliculaComponent } from './search-pelicula/search-pelicula.component';
import { CommonModule } from '@angular/common';
import { PeliculaFiltrosComponent } from './pelicula-filtros/pelicula-filtros.component';
import { PeliculaModalComponent } from './pelicula-modal/pelicula-modal.component';

@NgModule({
  imports: [RouterOutlet, PeliculaRoutingModule, CommonModule],
  exports: [],
  declarations: [
    PeliculasComponent,
    PeliculaToolbarComponent,
    SearchPeliculaComponent,
    PeliculaFiltrosComponent,
    PeliculaModalComponent
  ],
  providers: [],
})
export class PeliculaModule { }
