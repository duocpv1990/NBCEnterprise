import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { BehaviorSubject } from 'rxjs';
import { CertificationService } from 'src/app/services/certification.service';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.scss']
})
export class AddCertificateComponent extends BaseUploadComponent implements OnInit {
  fileNames = [];
  fileString;
  imagesPick: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(
    public s3Service: S3FileService,
    private dialogRef: MatDialogRef<AddCertificateComponent>,
    private certificationService: CertificationService
  ) { super(s3Service) }
  model: any = {};
  files: any;
  listMediaURL = [];
  select = 1;
  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  check(ev) {
    this.select = +ev;
  }

  onSelectFile(files) {
    console.log(files);

    this.files = files;
    const fileArr = Object.values(files);
    fileArr.forEach((val: any) => {
      const type = val.type.split('/');
      if (type[0] == 'image') {
        this.fileNames.push(val.name);
        const reader = new FileReader();
        reader.readAsDataURL(val);
        reader.onload = () => {
          this.fileString = reader.result;
          this.imagesPick.next(this.imagesPick.getValue().concat(this.fileString.split(',')[1].toString()));
        };
      }
    });
  }
  save() {
    if (this.select === 1) {
      this.multipleUpload(this.files).subscribe(res => {
      }, () => { }, () => {
        this.listMediaURL = this.fileLinkList.map(x => {
          return {
            MediaURL: x,
            Type: 1,
            Status: 1
          }
        })
        this.model.CertificationMedia = this.listMediaURL;
        this.model.Type = +this.model.Type;
        this.certificationService.createCertification(this.model).subscribe(res => {

          const modelCertification = {
            "CertificationId": res,
            "Name": this.model.Name,
            "ExpiredDate": this.model.ExpiredDate,
            "Type": this.model.Type,
            "Status": 1,
            "CertificationMedia": this.listMediaURL,
            "CertificationMedias": this.listMediaURL
          };
          this.dialogRef.close(modelCertification);
        })
      })

    }
    else {
      this.listMediaURL = [
        {
          MediaURL: this.model.Link,
          Type: 1,
          Status: 1
        }
      ];
      this.model.CertificationMedia = this.listMediaURL;
      this.model.Type = +this.model.Type;
      this.certificationService.createCertification(this.model).subscribe(res => {
        const modelCertification = {
          "CertificationId": res,
          "Name": this.model.Name,
          "ExpiredDate": this.model.ExpiredDate,
          "Type": this.model.Type,
          "Status": 1,
          "CertificationMedia": this.listMediaURL,
          "CertificationMedias": this.listMediaURL
        };
        this.dialogRef.close(modelCertification);
      })
    }

  }
}
@NgModule({
  declarations: [AddCertificateComponent],
  imports: [CommonModule, MatDialogModule, FormsModule],
  exports: [AddCertificateComponent]
})
export class AddCertificateModule { }
