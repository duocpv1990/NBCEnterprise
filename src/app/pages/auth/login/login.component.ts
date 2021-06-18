import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin: any;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthenticationService
  ) { }

  data = {
    type: {
      phone: 'phone',
      password: 'password',
    },
  };
  ngOnInit(): void { }

  login(ev) {
    this.authService
      .login({
        username: ev.username,
        password: ev.password,
      })
      .subscribe(
        (res) => {
          const token = JSON.parse(JSON.stringify(res)).payload;
          console.log(token);
          
          localStorage.setItem('access_token', token.AccessToken);
          this.localStorage.set('access_user', token);
          localStorage.setItem('RefreshToken', token.RefreshToken);
          this.router.navigate(['home']);
        },
        (err) => {
          this.errorLogin = err.error.message;
        }
      );
  }
  routeTo(e) {
    console.log(e);
  }
}
