import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PeliculasComponent } from '@cine/feature/pelicula/peliculas/peliculas.component';
import { PeliculaToolbarComponent } from './pelicula-toolbar/pelicula-toolbar.component';


const routes: Route[] = [

    {
        path: '',
        component: PeliculaToolbarComponent,
        children: [
            {
                path: '',
                component: PeliculasComponent
            }
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class PeliculaRoutingModule { }
