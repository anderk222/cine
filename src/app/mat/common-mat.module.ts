import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar'
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@NgModule({
    imports: [DialogComponent],
    exports: [MatSnackBarModule, DialogComponent, MatDialogModule],
    declarations: [],
    providers: [{provide : MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue : {
        duration : 2500
      }}],
})
export class CommonMatModule { }
