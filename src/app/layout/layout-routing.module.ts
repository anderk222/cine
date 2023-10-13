import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Route[] = [

    {
        path: '',
        component: RootComponent,
        children: [
            {
                path: 'author',
                loadChildren: () => import('../feature/writer/writer.module')
                    .then((file => file.WriterModule))
            },
            {
                path: 'favorite',
                loadChildren: () => import('../feature/favorite/favorite.module')
                    .then(file => file.FavoriteModule)
            },
            {
                path: 'title',
                loadChildren: () => import('../feature/title/title.module')
                    .then(file => file.TitleModule)
            }
        ],
    },

]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class LayoutRoutingModule { }
