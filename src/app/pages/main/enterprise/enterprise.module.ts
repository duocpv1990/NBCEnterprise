import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { enterpriseRoute } from './enterprise.routes';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';

@NgModule({
  declarations: [EnterpriseComponent, EnterpriseListComponent],
  imports: [
    CommonModule,
    FilterBaseModule,
    TableBaseModule,
    RouterModule.forChild(enterpriseRoute),
  ],
  exports: [EnterpriseComponent]
})
export class EnterpriseModule { }
