import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { shopRoute } from './shop.routes';

import { ShopComponent } from './shop.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { ShopCreateComponent } from './shop-create/shop-create.component';
import { ShopDeleteComponent } from './shop-delete/shop-delete.component';
import { CreateModule } from 'src/app/components/create/create.component';
import { DeleteModule } from 'src/app/components/dialog/delete/delete.component';


@NgModule({
  declarations: [ShopComponent, ShopListComponent, ShopCreateComponent, ShopDeleteComponent],
  imports: [
    CommonModule,
    FilterBaseModule,
    TableBaseModule,
    CreateModule,
    DeleteModule,
    RouterModule.forChild(shopRoute),
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
