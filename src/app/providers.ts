import { HTTP_INTERCEPTORS } from "@angular/common/http"
import { EnvironmentProviders, Provider } from "@angular/core"
import { ErrorCatchingInterceptor } from "./interceptor/catching-error.interceptor"
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar"
import { LoaderInterceptor } from "./interceptor/loader.iterceptor"

export const providers: (Provider | EnvironmentProviders)[] | undefined = [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorCatchingInterceptor,
    multi: true
},
{
    provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {
        duration: 2500
    }
},
{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
}
]