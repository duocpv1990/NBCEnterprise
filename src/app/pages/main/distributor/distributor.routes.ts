import { Routes } from "@angular/router";

import { DistributorComponent } from './distributor.component';
import { DisributorListComponent } from './disributor-list/disributor-list.component';

export const distributorRoute: Routes = [
  {
    path: '',
    component: DistributorComponent,
    data: { animation: 'isRight' },

    children: [
      {
        path: '',
        component: DisributorListComponent
      }
    ]
  }
]
