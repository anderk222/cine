import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { CanPrivate } from 'src/app/guard/CanPrivate';

const routes: Route[] = [

    {
        path: '',
        component: FavoriteComponent,
        canActivate : [CanPrivate]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class FavoriteRoutingModule { }
