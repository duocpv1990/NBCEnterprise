import { Routes } from "@angular/router";
import { ServicePackageListComponent } from "./service-package-list/service-package-list.component";
import { ServicePackageComponent } from "./service-package.component";



export const servicePackageRoute: Routes = [
    {
        path: '',
        component: ServicePackageComponent,
        data: { animation: 'isRight' },

        children: [
            {
                path: '',
                component: ServicePackageListComponent
            }
        ]
    }
]
