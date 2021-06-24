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
import { ciAuthInterceptorProvider, CiAuthModule } from '@consult-indochina/auth';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    CiCommonModule.forRoot({
      S3_URL: 'https://fgehlb1to6.execute-api.ap-southeast-1.amazonaws.com/prod/presigned-url'
    }),
    CiAuthModule.forRoot({ API_URL: 'http://192.168.1.34/nbc/api', PermissionNames: [], uiOption: 'custom' })
  ],
  providers: [
    LoaderService,
    S3FileService,
    { provide: MAT_DATE_LOCALE, useValue: 'vi-vi' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    ciAuthInterceptorProvider,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
