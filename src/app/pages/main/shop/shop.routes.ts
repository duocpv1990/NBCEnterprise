import { Routes } from "@angular/router";

import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';

export const shopRoute: Routes = [
  {
    path: '',
    component: ShopComponent,
    data: { animation: 'isRight' },

    children: [
      {
        path: '',
        component: ShopListComponent
      }
    ]
  }
]
