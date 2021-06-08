import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-certificate',
  templateUrl: './add-certificate.component.html',
  styleUrls: ['./add-certificate.component.scss']
})
export class AddCertificateComponent implements OnInit {
  fileNames = [];
  fileString;
  imagesPick: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile(files) {
    const fileArr = Object.values(files);
    fileArr.forEach((val: any) => {
      const type = val.type.split('/');
      if (type[0] == 'image') {
        this.fileNames.push(val.name);
        console.log('fileName', this.fileNames);

        const reader = new FileReader();
        reader.readAsDataURL(val);
        reader.onload = () => {
          this.fileString = reader.result;
          console.log(this.imagesPick.getValue());
          this.imagesPick.next(this.imagesPick.getValue().concat(this.fileString.split(',')[1].toString()));
        };
      }
    });
  }

}

@NgModule({
  declarations: [AddCertificateComponent],
  imports: [CommonModule, MatDialogModule, FormsModule],
  exports: [AddCertificateComponent]
})
export class AddCertificateModule { }
