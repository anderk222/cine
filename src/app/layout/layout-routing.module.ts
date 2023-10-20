import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';

const routes: Route[] = [

    {
        path: '',
        component: RootComponent,

        children: [
            {
                path: 'pelicula',
                loadChildren: () => import('@cine/feature/pelicula/pelicula.module')
                    .then(file => file.PeliculaModule)
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
