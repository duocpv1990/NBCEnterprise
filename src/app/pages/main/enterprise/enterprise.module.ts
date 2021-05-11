import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { enterpriseRoute } from './enterprise.routes';
import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';

@NgModule({
  declarations: [EnterpriseComponent, EnterpriseListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(enterpriseRoute),
  ],
  exports: [EnterpriseComponent]
})
export class EnterpriseModule { }
