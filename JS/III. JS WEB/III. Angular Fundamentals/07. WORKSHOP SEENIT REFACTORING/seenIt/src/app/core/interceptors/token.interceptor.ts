import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { APP_KEY, APP_SECRET } from '../../kinvey.tokens';
import {tap} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService,
              private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith(`/user/${APP_KEY}`) || req.url.endsWith('login')) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
          'Content-Type': 'application/json'
        }
      });
    } else {
      req = req.clone({
        setHeaders: {
          'Authorization': `Kinvey ${localStorage.getItem('token')}`
        }
      });
    }

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse && req.url.endsWith('login')) {
        this.toastr.success('Successfully logged in!', 'Success');
        this.auth.saveUserInfo(event.body);
      }
    }));
  }
}
