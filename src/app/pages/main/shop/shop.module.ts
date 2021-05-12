import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { shopRoute } from './shop.routes';

import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';


@NgModule({
  declarations: [ShopComponent, ShopListComponent],
  imports: [
    CommonModule,
    FilterBaseModule,
    TableBaseModule,
    RouterModule.forChild(shopRoute),
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
