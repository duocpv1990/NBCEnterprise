import { Routes } from "@angular/router";
import { AccountListComponent } from "./account-list/account-list.component";
import { SettingComponent } from './setting.component';


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
                path: '',
                redirectTo: '',
                pathMatch: 'full',
            },
        ]
    }
]
