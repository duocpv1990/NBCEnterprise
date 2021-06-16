import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { servicePackageRoute } from './service-package.routes';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';

import { ServicePackageComponent } from './service-package.component';
import { ServicePackageListComponent } from './service-package-list/service-package-list.component';
import { ServicePackageAddComponent } from './service-package-add/service-package-add.component';
import { CreateModule } from 'src/app/components/create/create.component';



@NgModule({
  declarations: [ServicePackageComponent, ServicePackageListComponent, ServicePackageAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(servicePackageRoute),
    FilterBaseModule,
    TableBaseModule,
    CreateModule
  ],
  exports: [
    ServicePackageComponent
  ]
})
export class ServicePackageModule { }
