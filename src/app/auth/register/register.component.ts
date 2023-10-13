import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { validateUser } from '../validators/auth-validators';

@Component({
  selector: 'writers-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(
    private service: UserService,
    private fb: FormBuilder,
    private snackbar : MatSnackBar,
    private router : Router
    ) { }


  user = this.fb.group({

    name: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required, Validators.minLength(2), Validators.maxLength(10),validateUser()]
    }),

    email: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required, Validators.email, validateUser()]
    }),
    password: this.fb.control('', {
      nonNullable: true,
      validators: [
        Validators.required, Validators.minLength(4)]
    }),
  })

  handlerRegister() {
    
    this.service.register(this.user.value);

    this.snackbar.open('Usuario creado con exito');
    this.router.navigate(['/auth']);

  }

  get email(): any { return this.user.get('email') }
  get name(): any { return this.user.get('name') }
  get password(): any { return this.user.get('password') }

  set email(value: any) { this.user.patchValue({ email: value }) }
  set name(value: any) { this.user.patchValue({ name: value }) }
  set password(value: any) { this.user.patchValue({ password: value }) }

}