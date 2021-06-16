import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { RouterModule } from '@angular/router';
import { settingRoute } from './setting.routes';
import { SettingComponent } from './setting.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { PrivilegesComponent } from './privileges/privileges.component';


@NgModule({
  declarations: [SettingComponent, AccountListComponent, AuthorizationComponent, PrivilegesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoute),
  ]
})
export class SettingModule { }
