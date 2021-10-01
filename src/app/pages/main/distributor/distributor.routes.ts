import { Routes } from "@angular/router";
import { DistributorListComponent } from "./distributor-list/distributor-list.component";

import { DistributorComponent } from './distributor.component';

export const distributorRoute: Routes = [
  {
    path: '',
    component: DistributorComponent,
    data: { animation: 'isRight' },

    children: [
      {
        path: '',
        component: DistributorListComponent
      }
    ]
  }
]
