import { Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss'],
})
export class BaseCardComponent implements OnInit {
  @Input() dataCard: any;
  @Input() numCol = 3;

  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [BaseCardComponent],
  imports: [CommonModule],
  exports: [BaseCardComponent],
})
export class BaseCardModule {}
