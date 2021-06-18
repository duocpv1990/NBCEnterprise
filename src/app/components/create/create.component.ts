import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { AddCertificateComponent } from '../dialog/add-certificate/add-certificate.component';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseUploadComponent implements OnInit {
  @Input() data: any;
  @Input() option: any;
  @Input() arrayButton: any;
  @Input() dataModel?: any;
  @Output() callback = new EventEmitter<any>();
  @Output() selectChange = new EventEmitter<any>();

  html: '';
  model: any = {};
  imagePath;
  imgURL;
  fileAvatar;
  fileBackground;
  companyMedias: any = [];
  constructor(
    public s3Service: S3FileService,
    private dialog: MatDialog
  ) {super(s3Service) }

  ngOnInit() {
    this.model = this.dataModel || {};
  }
  
  preview(files, value) {
    if (value === 'avatar') {
       this.fileAvatar = [];


      if (files.length === 0)
        return;
      let reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.model.MediaURL = reader.result;
        this.fileAvatar.push(files);      
        console.log(this.fileAvatar);
          
      }
    }
    else if (value === 'background') {
      this.fileBackground = [];
      if (files.length === 0)
        return;
      let reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.model.BackgroundURL = reader.result;
        this.fileBackground.push(files);
        console.log(this.fileBackground);
        
      }
    }

  }
  handleSelectChange(ev, check){
    this.selectChange.emit({
      value: ev,
      check: check
    })
    
  }
  onCallBackData = () => { }

  onClickButton = (i) => {
    this.companyMedias = [];
    this.multipleUpload(this.fileAvatar[0]).subscribe(res => {
    }, () => {}, () => {
       const model = {
         MediaURL: this.fileLinkList[0],
         Type: 1,
         Status: 1
       }
       this.companyMedias.push(model);
    })
    this.multipleUpload(this.fileBackground[0]).subscribe(res => {
    }, () => {}, () => {
      const model = {
        MediaURL: this.fileLinkList[1],
        Type: 2,
        Status: 1
      }
      this.companyMedias.push(model);
    });
    this.model.companyMedias = this.companyMedias;
    i.data = this.model;
    this.callback.emit(i);
  }

  addCertificate() {
    this.dialog.open(AddCertificateComponent, {}).afterClosed().subscribe(result => {
        if(result){
            console.log(result);
            this.model.CertificationIdList = [result];
        }
    });
  }

}

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, MatDialogModule, MatMenuModule, FormsModule, MatIconModule],
  exports: [CreateComponent],
})
export class CreateModule { }
