import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(private router: Router) {}

  redirectToLink(link: string): void {

    const returnUrl =
      this.router.routerState.snapshot.url;

    this.router.navigate([link], {
      queryParams: { returnUrl },
    });
  }
}
