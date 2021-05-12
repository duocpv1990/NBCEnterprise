import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { enterpriseRoute } from './enterprise.routes';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { CreateModule } from 'src/app/components/create/create.component';
import { EnterpriseCreateComponent } from './enterprise-create/enterprise-create.component';
import { DeleteComponent, DeleteModule } from 'src/app/components/dialog/delete/delete.component';
import { DeleteEnterpriseComponent } from './delete-enterprise/delete-enterprise.component';

@NgModule({
  declarations: [EnterpriseComponent, EnterpriseListComponent, EnterpriseCreateComponent, DeleteEnterpriseComponent],
  imports: [
    CommonModule,
    FilterBaseModule,
    TableBaseModule,
    CreateModule,
    DeleteModule,
    RouterModule.forChild(enterpriseRoute),
  ],
  exports: [EnterpriseComponent]
})
export class EnterpriseModule { }
