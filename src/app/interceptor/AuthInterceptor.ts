import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {AccountService} from "../shared/account.service";
import {ApiService} from "../shared/api.service";
import {LocalStorageService} from "../app/shared/local-storage.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) {
    console.log("New AuthInterceptor");
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(this.accountService);
    if (!this.accountService.isLoggedIn()) {
      return next.handle(req);
    }

    const jwtToken = this.accountService.getJWT();

    const tokenizedReq = this.closeRequestWithToken(req, jwtToken);

    return next.handle(tokenizedReq).pipe(
      catchError(err => {
        return throwError(err);
      }));

  }

  closeRequestWithToken(req: HttpRequest<any>, jwtToken: string) {
    return req.clone({
      headers: req.headers.set('Authorization', `Bearer ${jwtToken}`),
    });
  }

}
