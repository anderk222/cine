import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth.routing.module';
import { RegisterComponent } from './register/register.component';
import { CommonMatModule } from '../mat/common-mat.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AuthRoutingModule,
        CommonMatModule
    ],
    exports: [],
    declarations: [LoginComponent, RegisterComponent],
    providers: [],
})
export class AuthModule { }