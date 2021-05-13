import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() data: any;
  // @Output() callback = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  handleRouteLink(item) {
    // this.callback.emit({
    //   type: 'route',
    //   item: item
    // })
  }

}

@NgModule({
  declarations: [CardListComponent],
  imports: [CommonModule],
  exports: [CardListComponent],
})
export class BaseCardModule { }
