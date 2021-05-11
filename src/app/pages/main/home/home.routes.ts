import { Routes } from "@angular/router";

import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'isRight' },

    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
]
