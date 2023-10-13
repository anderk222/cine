import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'writers-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone : true,
  imports : [MatDialogModule]
})
export class DialogComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public data : DialogInput ) { }
}

type DialogInput ={
  message : string
  title : string
}

export { DialogInput }