import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = req.clone({
      url: `${environment.API_URL}/${req.url}`,
      setHeaders: {
        'Content-Type': 'application/json',
        // 'X-CBH-VIETTEL':  'd96ed56b-a0c9-4fc8-9bb8-adcc285b904d-cbh-viettel'
      },
    });
    return next.handle(request).pipe(retry(1));
  }
}