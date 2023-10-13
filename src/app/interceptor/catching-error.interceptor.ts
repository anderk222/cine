import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({providedIn : 'any'})
export class ErrorCatchingInterceptor implements HttpInterceptor {

    constructor(private snackbar: MatSnackBar) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request)
            .pipe(
                map(res => {
                    console.log("Passed through the interceptor in response");
                    return res
                }),
                catchError((error: HttpErrorResponse) => {

                    if (error.error instanceof ErrorEvent) {
                        console.log('This is client side error');
                        this.snackbar.open(`Error: ${error.error.message}`);
                    } else {
                        console.log('This is server side error');
                        this.snackbar.open(`Error Code: ${error.status},  Message: ${error.message}`);
                    }
                    throw of(null);
                })
            )
    }
}