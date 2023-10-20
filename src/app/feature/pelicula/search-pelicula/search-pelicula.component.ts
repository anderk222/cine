import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LoadStatus } from '@cine/model/LoadStatus';

@Component({
  selector: 'cine-search-pelicula',
  templateUrl: './search-pelicula.component.html',
  styleUrls: ['./search-pelicula.component.css']
})
export class SearchPeliculaComponent {

  @ViewChild('searchPelicula') element!: ElementRef;

  @ViewChild('ipt') ipt!: ElementRef<HTMLInputElement>;

  open = false;

  status : LoadStatus = 'OK'


  @HostListener('document:click', ['$event'])
  onClick(event: Event) {

    let target = event.target as HTMLElement;

    if (!this.element.nativeElement.contains(target)) {

      this.open = false;
    }
  }

}
