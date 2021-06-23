import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { ProductionService } from 'src/app/services/production.service';
import { AddCertificateComponent } from '../dialog/add-certificate/add-certificate.component';

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
  @Input() listCertification: any;
  @Output() callback = new EventEmitter<any>();
  @Output() selectChange = new EventEmitter<any>();

  html: '';

  model: any = {};
  imagePath;
  fileAvatar: any;
  fileBackground: any;
  listMedia: any = [];
  imgURL;
  listComplete: any = [];
  listSearch: any = [];
  timer;
  certificationDetail: any = [];
  constructor(
    public s3Service: S3FileService,
    private dialog: MatDialog,
    private enterpriseService: EnterpriseService,
    private productService: ProductionService
  ) {
    super(s3Service);
  }
  ngOnChanges(): void {
    this.model = this.dataModel || {};
    this.certificationDetail = this.listCertification;
    console.log(this.model);
    console.log(this.certificationDetail);
    
    
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
  }
  

  ngOnInit() {
    // this.timer = this.enterpriseService.getListCompany("", "", 1, 1, 50).subscribe(res => {
    //   this.listComplete = res;
    // });

  }
  selectCompany(value){
    this.model.CompanyId = value.CompanyId;
    this.model.CompanyName = value.Name;
    this.listSearch.length = 0;
  }
  autocomplete(name) {
    if (!name) return this.listSearch.length = 0;
    this.listSearch = this.listComplete.filter(x => x.Name.toLowerCase().indexOf(name.toLowerCase()) > -1);
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
        this.model.FileAvatar = files;
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
        this.model.FileBackground = files;
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
      i.data = this.model;
      this.callback.emit(i);
    }
    else {
      this.callback.emit(i);
    }
  }
  addCertificate() {
    this.dialog.open(AddCertificateComponent, {}).afterClosed().subscribe(result => {
      if (result) {
        this.certificationDetail.push(result);
        // this.listIdCertification.push(result.CertificationId);
        // this.model.CertificationIdList = this.listIdCertification;
        console.log(this.certificationDetail);
        switch (this.option.check) {
          case 'enterprise':
            const model = {
                "CertificationId": result.CertificationId,
                "CompanyId": this.model.id,
                "Type": 1,
                "Status": 1
            }
            this.enterpriseService.CreateCertificateCompany(model).subscribe(res => {
            })
            break;
          case 'production':
               
            break;
          default:
            break;
        }
      }
    });
  }
}


@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, MatDialogModule, FormsModule, MatIconModule],
  exports: [EditComponent],
})
export class EditModule { }
