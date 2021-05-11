import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { distributorRoute } from './distributor.routes';
import { DistributorComponent } from './distributor.component';
import { DisributorListComponent } from './disributor-list/disributor-list.component';



@NgModule({
  declarations: [DistributorComponent, DisributorListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(distributorRoute)
  ],
  exports: [DistributorComponent]
})
export class DistributorModule { }
