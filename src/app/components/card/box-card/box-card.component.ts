import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-card',
  templateUrl: './box-card.component.html',
  styleUrls: ['./box-card.component.scss']
})
export class BoxCardComponent implements OnInit {
  @Input() dataBox;
  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [ BoxCardComponent],
  imports: [   
  ],
  exports: [BoxCardComponent]
})
export class BoxCardModule{}
