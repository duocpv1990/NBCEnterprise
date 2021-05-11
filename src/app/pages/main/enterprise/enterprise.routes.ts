import { Routes } from "@angular/router";
import { EnterpriseComponent } from './enterprise.component'
import { EnterpriseListComponent } from './enterprise-list/enterprise-list.component';

export const enterpriseRoute: Routes = [
  {
    path: '',
    component: EnterpriseComponent,
    data: { animation: 'isRight' },

    children: [
      {
        path: '',
        component: EnterpriseListComponent
      }
    ]
  }
]
