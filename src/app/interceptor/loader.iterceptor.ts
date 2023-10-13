import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private snackbar: MatSnackBar) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        let snackref = this.snackbar.open('Cargando....', '',
            {
                direction: 'ltr', duration: undefined,
                horizontalPosition: 'right',
                verticalPosition :'bottom'
            });

        return next.handle(request).pipe(
            finalize(() => snackref.dismiss()),
        );
    }
}