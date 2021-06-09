import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  UrlSegment,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RedirectService } from 'src/app/services/redirective.service';


@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private readonly redirectService: RedirectService) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasPermission(next.data.permission);
  }

  canActivateChild(next: ActivatedRouteSnapshot): Observable<boolean> {
    const permissionData =
      next.data.permission || next.parent?.data?.permission;
    return this.hasPermission(next.data.permission);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.hasPermission(route.data.permission);
  }

  private hasPermission(data): Observable<boolean> {
    if (data) {
      return of(localStorage.getItem('role') === data.roles).pipe(
        tap((isPer) => {
          console.log(isPer);
          if (!isPer && data.redirectLink) {
            this.redirectService.redirectToLink(data.redirectLink);
          }
        })
      );
    }
    return of(true);
  }
}
