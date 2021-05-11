import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss']
})
export class FilterCardComponent implements OnInit {
@Input() listFilter;
  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule ({
  declarations: [FilterCardComponent],
  imports: [CommonModule,
              FormsModule,ReactiveFormsModule
  ],
  exports: [FilterCardComponent]

})

export class FilterCardModule{}