import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable({
  providedIn : 'root'
})
export class UserService {

  public register(user : Partial<User>){

    let users = this.users;

    users.push(user as User);

    localStorage.setItem("users", JSON.stringify(users));

  }

  public exist(nameOrEmail : string){

    return this.users.some(v=>v.name === nameOrEmail || v.email==nameOrEmail)

  }

  get users(): User[]{

    let storage = localStorage.getItem("users");

    return !storage ? [] : JSON.parse(storage);

  }

}