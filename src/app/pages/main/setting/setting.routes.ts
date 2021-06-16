import { Routes } from "@angular/router";
import { AccountListComponent } from "./account-list/account-list.component";
import { SettingComponent } from './setting.component';
import { PrivilegesComponent } from './privileges/privileges.component';
import { AuthorizationComponent } from './authorization/authorization.component';

export const settingRoute: Routes = [
    {
        path: '',
        component: SettingComponent,
        data: { animation: 'isRight' },

        children: [
            {
                path: 'account-list',
                component: AccountListComponent
            },
            {
                path: 'privileges',
                component: PrivilegesComponent
            },
            {
                path: 'authorization',
                component: AuthorizationComponent
            },

            {
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            },
        ]
    }
]
