import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountInforComponent } from './account-infor/account-infor.component';
import { SettingComponent } from './setting.component';
import { settingRoute } from './setting.routes';
import { EnterpriseInforComponent } from './enterprise-infor/enterprise-infor.component';
import { MatTabsModule } from '@angular/material/tabs';
import { FilterBaseModule } from 'src/app/components/filter/filter.component';
import { TableBaseModule } from 'src/app/components/table/table.component';
import { BaseButtonModule } from 'src/app/components/button/base-button/base-button.component';

@NgModule({
  declarations: [SettingComponent, AccountInforComponent, EnterpriseInforComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(settingRoute),
	MatTabsModule,
	FilterBaseModule,
    TableBaseModule,
	BaseButtonModule
  ],
  exports: [SettingComponent],
})
export class SettingModule {}
