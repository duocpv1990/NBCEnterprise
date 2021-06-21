import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent extends BaseUploadComponent implements OnInit, OnChanges {
  @Input() data: any;
  @Input() option: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Output() callback = new EventEmitter<any>();
  @Output() selectChange = new EventEmitter<any>();

  html: '';

  model: any = {};
  imagePath;
  fileAvatar;
  fileBackground;
  listMedia: any = [];
  imgURL;
  certificationDetail: any = {};
  constructor(
    public s3Service: S3FileService,
    private enterpriseService: EnterpriseService
  ) {
    super(s3Service);
  }
  ngOnChanges(): void {
    this.model = this.dataModel || {};
    console.log(this.model);
    
    if (this.model.listMedia) {
      this.model.listMedia.forEach(x => {
        if (x.Type == 1) {
          this.model.MediaURL = x.MediaURL;
        }
        if (x.Type == 2) {
          this.model.BackgroundURL = x.MediaURL
        }
      });
    }
    if (this.model.CompanyCertifications) {
      this.certificationDetail = this.model.CompanyCertifications[0];
    }
  }

  ngOnInit() {
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
        this.fileAvatar = files;
      }
    }
    else if (value === 'background') {
      if (files.length === 0)
        return;
      let reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.model.BackgroundURL = reader.result;
        this.fileBackground = files;
      }
    }

  }
  handleSelectChange(ev, check) {
    this.selectChange.emit({
      value: ev,
      check: check
    })

  }
  onCallBackData = () => { }

  onClickButton = (i) => {
    if (i.class === "btn-save") {
      this.selectImage(this.fileAvatar).subscribe(res => { }, (err) => { }, () => {
        let modelAvatar = {
          CompanyId: this.model.CompanyId,
          MediaURL: this.imageLinkUpload,
          Type: 1,
          Status: 1
        }
        this.listMedia.push(modelAvatar);
        this.selectImage(this.fileBackground).subscribe(res => { }, (err) => { }, () => {
          let modelBackground = {
            CompanyId: this.model.CompanyId,
            MediaURL: this.imageLinkUpload,
            Type: 2,
            Status: 1
          };
          this.listMedia.push(modelBackground);
          i.data = this.model;
          i.listMedia = this.listMedia;
          this.callback.emit(i);
        });
      });
      i.
      this.callback.emit(i);
    }
    else {
      this.callback.emit(i);
    }
  }
}

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, MatDialogModule, FormsModule, MatIconModule],
  exports: [EditComponent],
})
export class EditModule { }
