import { NgModule } from '@angular/core';
import { TitleRoutingModule } from './title-routing.module';
import { TitleComponent } from './title/title.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [TitleRoutingModule, CommonModule],
    exports: [],
    declarations: [
    TitleComponent
  ],
    providers: [],
})
export class TitleModule { }
