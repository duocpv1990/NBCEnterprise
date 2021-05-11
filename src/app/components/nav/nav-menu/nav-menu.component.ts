import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  @Input() dataNavMenu;
  constructor() {}

  ngOnInit(): void {}
}


@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, RouterModule],

  exports: [NavMenuComponent],
})
export class NavComponentModule {}