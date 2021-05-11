import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { homeRoute } from './home.routes';
import { HomeComponent } from './home.component'



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoute),
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
