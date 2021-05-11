import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { shopRoute } from './shop.routes';

import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';


@NgModule({
  declarations: [ShopComponent, ShopListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(shopRoute),
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
