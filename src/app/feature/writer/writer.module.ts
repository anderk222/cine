import { NgModule } from '@angular/core';
import { WritersComponent } from './writers/writers.component';
import { WriterComponent } from './writer/writer.component';
import { CommonModule } from '@angular/common';
import { CommonMatModule } from 'src/app/mat/common-mat.module';
import { WriterRoutingModule } from './writer-routing.module';
import { RouterLink } from '@angular/router';
import { FavComponent } from 'src/app/shared/fav/fav.component';


@NgModule({
  imports: [
    CommonModule,
    CommonMatModule,
    WriterRoutingModule,
    RouterLink,
    FavComponent
  ],
  exports: [],
  declarations: [
    WritersComponent,
    WriterComponent
  ],
  providers: [],
})
export class WriterModule { }
