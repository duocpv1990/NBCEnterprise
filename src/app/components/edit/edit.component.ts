import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() data: any;
  @Input() option: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Output() callback = new EventEmitter<any>();

  html: '';
  model: any = {};
  imagePath;
  imgURL;
  constructor(
  ) { }

  ngOnInit() {
    this.model = this.dataModel || {};
  }

  preview(files, value) {
     if (value === 'avatar') {
      if (files.length === 0)
        return;
      let reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.model.MediaURL = reader.result;
      }
    }
    else if(value === 'background'){
      if (files.length === 0)
      return;
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.model.BackgroundURL = reader.result;
      console.log(this.model);
      
    }
    }

  }
  onCallBackData = () => { }

  onClickButton = (i) => {
    i.data = this.model;
    this.callback.emit(i);
  }
}

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, MatDialogModule, FormsModule, MatIconModule],
  exports: [EditComponent],
})
export class EditModule { }
