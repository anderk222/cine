import { Injectable } from '@angular/core';
import { auth } from '../model/auth';
import { User } from '../model/user';
import { isEmpty } from 'src/app/util/object';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private service : UserService) { }

  user : { name : string, email : string } = {} as any;

  authenticate(auth: Partial<auth>) {

    let users = this.service.users;

    let idx = users.findIndex(user => this.compare(user, auth as auth));

    if(idx < 0) return false;

    this.user = {
      name : users[idx].name,
      email : users[idx].email
    }

    return true;

  }

  logout(){ this.user = {} as any }
  

  private compare(user: User, auth: auth) {

    return (
      user.email == auth.name || user.name == auth.name && auth.password == user.password
    )
  }

  get authenticated(): boolean{ return !isEmpty(this.user) }

}
