import { Routes } from "@angular/router";

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';

export const productRoute: Routes = [
  {
    path: '',
    component: ProductComponent,
    data: { animation: 'isRight' },

    children: [
      {
        path: '',
        component: ProductListComponent
      }
    ]
  }
]
