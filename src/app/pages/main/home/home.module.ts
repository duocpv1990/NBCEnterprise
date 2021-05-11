import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { homeRoute } from './home.routes';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component'



@NgModule({
  declarations: [HomeComponent, HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
