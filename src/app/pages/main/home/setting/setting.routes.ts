import { Routes } from "@angular/router";
import { AccountInforComponent } from "./account-infor/account-infor.component";
import { EnterpriseInforComponent } from "./enterprise-infor/enterprise-infor.component";
import { SettingComponent } from "./setting.component";

export const settingRoute: Routes = [
	{
	  path: 'setting',
	  component: SettingComponent,
  
	  children: [
		{
			path: '',
			component: AccountInforComponent
		},
		{
		  path: 'enterprise',
		  component: EnterpriseInforComponent
		}
	  ]
	}
  ]
  