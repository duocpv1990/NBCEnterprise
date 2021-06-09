import { Routes } from "@angular/router";

import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SettingComponent } from "./setting/setting.component";
import { HomeEnterpriseComponent } from "./home-enterprise/home-enterprise.component";
import { HomeProductComponent } from "./home-product/home-product.component";
import { HomeNotificationComponent } from "./home-notification/home-notification.component";

export const homeRoute: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'isRight' },

    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'enterprise-list',
        component: HomeEnterpriseComponent
      },
      {
        path: 'product-list',
        component: HomeProductComponent
      },
      {
        path: 'notification-list',
        component: HomeNotificationComponent
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./setting/setting.module').then((m) => m.SettingModule),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ]
  }
]
