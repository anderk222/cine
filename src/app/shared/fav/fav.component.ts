import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cine-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css'],
  standalone: true,
  imports : [ NgIf ]
})
export class FavComponent {

  @Input() active = false;
  @Output() change = new EventEmitter<boolean>();

  handlerChange(){

    this.active = !this.active;

    this.change.emit(this.active);

  }

}