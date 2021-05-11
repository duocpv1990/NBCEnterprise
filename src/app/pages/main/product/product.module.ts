import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { productRoute } from './product.routes';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';


@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute),
    FilterBaseModule,
    TableBaseModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
