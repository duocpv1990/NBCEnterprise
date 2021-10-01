import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  @Input() data;
  @Output() callback = new EventEmitter<any>();
  constructor() { }
  
  ngOnInit(): void {
  }
  onClick(ev){
    const model = {
       value: ev
    }
    this.callback.emit(model)
  }



}
@NgModule({
  declarations: [DeleteComponent],
  imports: [CommonModule, MatDialogModule, MatIconModule],
  exports: [DeleteComponent],
})
export class DeleteModule { }

