import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'cine-pelicula-filtros',
  templateUrl: './pelicula-filtros.component.html',
  styleUrls: ['./pelicula-filtros.component.css']
})
export class PeliculaFiltrosComponent {


  @ViewChild("filtros") container! : ElementRef<HTMLDivElement>;

  open = false;

  onClick(event : Event){

    event.stopPropagation();
  }

}