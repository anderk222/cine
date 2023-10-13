import { NgModule } from '@angular/core';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavComponent } from 'src/app/shared/fav/fav.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@NgModule({
    imports: [FavComponent, CommonModule, RouterLink],
    exports: [FavoriteRoutingModule],
    declarations: [FavoriteComponent],
    providers: [],
})
export class FavoriteModule { }
