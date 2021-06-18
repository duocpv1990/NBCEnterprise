import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './utils/interceptors/api.interceptor';
import { AuthInterceptor } from './utils/interceptors/auth.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CiCommonModule, S3FileService } from '@consult-indochina/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    CiCommonModule.forRoot({
      S3_URL: 'https://li1jm77bc8.execute-api.ap-southeast-1.amazonaws.com/prod/presigned'
    })
  ],
  providers: [
    S3FileService,
    { provide: MAT_DATE_LOCALE, useValue: 'vi-vi' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
