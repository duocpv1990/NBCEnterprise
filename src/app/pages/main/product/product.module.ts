import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { productRoute } from './product.routes';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { CreateModule } from 'src/app/components/create/create.component';
import { EditModule } from 'src/app/components/edit/edit.component';
import { DeleteModule } from 'src/app/components/dialog/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { RoleDirectiveModule } from 'src/app/utils/directives/role.directive';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoaderService } from 'src/app/services/loader.service';
import { LoaderModule } from 'src/app/utils/loader/loader.component';
@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductAddComponent, ProductUpdateComponent, ProductDeleteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoute),
    FilterBaseModule,
    TableBaseModule,
    LoaderModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    CreateModule,
    EditModule,
    DeleteModule,
    FormsModule,
    RoleDirectiveModule
  ],
  exports: [ProductComponent]
})
export class ProductModule { }
