import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { WritersComponent } from './writers/writers.component';
import { WriterComponent } from './writer/writer.component';

const routes : Route[] = [
    {
      path : '',
      component : WritersComponent
    },
    {
        path : ':author',
        component : WriterComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class WriterRoutingModule { }
