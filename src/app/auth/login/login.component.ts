import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'writers-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private snackbar : MatSnackBar,
    private router : Router
    ) { }

  user = this.fb.group({

    name: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required, Validators.minLength(2)]
    }),
    password: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required, Validators.minLength(4)]
    }),
  })

  handlerLogin() {
    
    let pass = this.auth.authenticate(this.user.value);

    if(!pass) this.snackbar.open('Credenciales incorrectas')
    else this.router.navigate(['/layout']);

  }

  get name(): any { return this.user.get('name') }
  get password(): any { return this.user.get('password') }

  set name(value: any) { this.user.patchValue({ name: value }) }
  set password(value: any) { this.user.patchValue({ password: value }) }

}
