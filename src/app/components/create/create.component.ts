import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { EnterpriseService } from 'src/app/services/enterprise.service';
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
  timer;
  html: '';
  model: any = {};
  imagePath;
  imgURL;
  listSearch: any = [];
  fileAvatar;
  multipFile = [];
  fileBackground;
  listComplete: any = [];
  listCertification: any = [];
  listMedia: any = [];
  listIdCertification: any = [];
  error;
  constructor(
    public s3Service: S3FileService,
    private enterpriseService: EnterpriseService,
    private dialog: MatDialog
  ) { super(s3Service) }

  ngOnInit() {
    this.model = this.dataModel || {};
   
  }


  selectCompany(value){
    this.model.CompanyId = value.CompanyId;
    this.model.CompanyName = value.Name;
    this.listSearch = [];
  }
  autocomplete(name) {
    if (!name){
      return this.listSearch = [];
    } 
    else{
      clearTimeout(this.timer);
      this.timer = this.enterpriseService.getListCompany("",name, "", 1, 50).subscribe(res => {
        this.listSearch = res;
      })
    
    }
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




  onClickButton(i) {
    if (i.class === "btn-save") {
      this.selectImage(this.fileAvatar).subscribe(res => { }, (err) => { }, () => {
        const modelAvatar = {
          MediaURL: this.imageLinkUpload,
          Type: 1,
          Status: 1
        }
        this.listMedia.push(modelAvatar);
        this.selectImage(this.fileBackground).subscribe(res => { }, (err) => { }, () => {
          const modelBackground = {
            MediaURL: this.imageLinkUpload,
            Type: 2,
            Status: 1
          }
          this.listMedia.push(modelBackground);
          i.data = this.model;
          i.listMedia = this.listMedia;
          this.callback.emit(i);
        })
      })
    }
    else {
      this.callback.emit(i);
    }

  }

  addCertificate() {
    this.dialog.open(AddCertificateComponent, {}).afterClosed().subscribe(result => {
      if (result) {
        this.listCertification.push(result);
        this.listIdCertification.push(result.CertificationId);
        this.model.CertificationIdList = this.listIdCertification;
        console.log(this.model);
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
