import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full'
  },
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(file => file.LayoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(file => file.AuthModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
