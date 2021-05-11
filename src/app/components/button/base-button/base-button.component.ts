import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() titleButton;
  @Input() dataButton: any;
  @Output() callback = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


}


@NgModule({
  declarations: [BaseButtonComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  exports: [BaseButtonComponent]
})

export class BaseButtonModule{}
