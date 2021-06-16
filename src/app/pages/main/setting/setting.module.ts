import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './account-list/account-list.component';
import { RouterModule } from '@angular/router';
import { settingRoute } from './setting.routes';
import { SettingComponent } from './setting.component';


@NgModule({
  declarations: [SettingComponent, AccountListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoute),
  ]
})
export class SettingModule { }
