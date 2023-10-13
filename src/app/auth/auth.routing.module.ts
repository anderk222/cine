import { NgModule } from '@angular/core';
import { Route, RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanAuth } from '../guard/CanAuth';

const routes: Route[] = [

    {
        path: '',
        component: LoginComponent,
        canActivate : [CanAuth]
    }, 
    {
        path: 'new',
        component : RegisterComponent,
        canActivate : [CanAuth]

    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterLink],
    declarations: [],
    providers: [],
})
export class AuthRoutingModule { }
