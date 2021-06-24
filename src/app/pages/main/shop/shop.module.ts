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
import { ShopEditComponent } from './shop-edit/shop-edit.component';
import { EditModule } from 'src/app/components/edit/edit.component';
import { LoaderModule } from 'src/app/utils/loader/loader.component';


@NgModule({
  declarations: [ShopComponent, ShopListComponent, ShopCreateComponent, ShopDeleteComponent, ShopEditComponent],
  imports: [
    CommonModule,
    FilterBaseModule,
    TableBaseModule,
    CreateModule,
    LoaderModule,
    EditModule,
    DeleteModule,
    RouterModule.forChild(shopRoute),
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
