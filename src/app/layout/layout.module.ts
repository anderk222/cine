import { NgModule } from '@angular/core';
import { NavarComponent } from './navbar/navar.component';
import { RootComponent } from './root/root.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonMatModule } from '../mat/common-mat.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    LayoutRoutingModule,
    RouterOutlet,
    CommonMatModule,
    CommonModule,
    RouterLink],
  exports: [],
  declarations: [
    NavarComponent,
    RootComponent,
    SidebarComponent
  ],
  providers: [],
})
export class LayoutModule { }
