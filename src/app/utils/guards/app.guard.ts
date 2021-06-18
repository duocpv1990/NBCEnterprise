import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/localstorage.service';
@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanLoad, CanActivate {
  currentUrl: string;
  constructor(
    private localStorageService: LocalStorageService,
    public router: Router
  ) { }

  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }

  canActivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['home']);
      return false;
    } else {
      return true;
    }
  }
}
