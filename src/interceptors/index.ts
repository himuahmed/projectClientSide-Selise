import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { progressSpinnerInterceptor } from "./progressSpinner.interceptor";

export const AllInterceptors = [
    {provide: HTTP_INTERCEPTORS, useClass: progressSpinnerInterceptor, multi: true}
]