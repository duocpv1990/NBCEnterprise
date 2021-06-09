import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [HeaderLogoComponent, HeaderInfoComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatBadgeModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    RouterModule
  ],

  exports: [HeaderLogoComponent, HeaderInfoComponent],
})
export class HeaderComponentModule { }
