import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';

const routes : Route[] = [

    {
        path : ':title',
        component : TitleComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [],
    providers: [],
})
export class TitleRoutingModule { }
