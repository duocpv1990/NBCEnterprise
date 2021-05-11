import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderLogoComponent, HeaderInfoComponent],
  imports: [CommonModule,MatMenuModule,MatIconModule,MatDialogModule],

  exports: [HeaderLogoComponent, HeaderInfoComponent],
})
export class HeaderComponentModule {}
