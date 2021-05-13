import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { homeRoute } from './home.routes';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component'
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [HomeComponent, HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
    NgApexchartsModule,
    MatTabsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
