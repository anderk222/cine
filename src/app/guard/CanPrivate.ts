import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "../auth/service/auth.service";
import { Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn : 'any'
})
export class CanPrivate implements CanActivate {
  constructor(
    private auth : AuthService,
    private snackbar : MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

    if(!this.auth.authenticated) this.snackbar.open('No tienes acceso a esta pagina')

    return this.auth.authenticated;
  }
}