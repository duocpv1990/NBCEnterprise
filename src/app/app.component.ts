import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CiAuthService, CiAuthStateService } from '@consult-indochina/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private readonly router: Router,
    private ciAuthStateService: CiAuthStateService,
    private authService: CiAuthService
  ) {

  }

  ngOnInit() {
    let rtokexp = +JSON.parse(localStorage.getItem('rtok_expire')) || null;
    if (rtokexp && rtokexp > new Date().getTime()) {
      localStorage.clear();
      this.router.navigate(['/log-in']);
    }
    this.authService.retrieveTokenOnPageLoad(); // setup authState
    this.ciAuthStateService.isAuthorized$.subscribe(() => {
    });
  }

}
