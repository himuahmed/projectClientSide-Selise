import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, finalize, retry } from "rxjs/operators";
import { ProgressSpinnerService } from "src/app/services/progressSpinner.service";

@Injectable()

export class progressSpinnerInterceptor implements HttpInterceptor {

    constructor( private _progressSpinnerService: ProgressSpinnerService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
    {
        this._progressSpinnerService.spinnerVisible();
        console.log("Spinner activated");
        return next.handle(request).pipe(         
            finalize( ()=> {
                console.log('Spinner deactivated');
                this._progressSpinnerService.spinnerHidden();
        }));
    }
}