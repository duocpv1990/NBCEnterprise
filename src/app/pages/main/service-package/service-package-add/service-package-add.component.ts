import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ServicePackage } from 'src/app/models/service-package.model';

@Component({
  selector: 'app-service-package-add',
  templateUrl: './service-package-add.component.html',
  styleUrls: ['./service-package-add.component.scss']
})
export class ServicePackageAddComponent implements OnInit {
  conFig = new ServicePackage;
  dataModel = {};
  option = {
    title: 'THÊM MỚI GÓI DỊCH VỤ',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  },
  {
    class: 'btn-save',
    text: 'Lưu'
  }]

  constructor(
    private dialogRef: MatDialogRef<ServicePackageAddComponent>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  handleCallbackEvent = (value) => {
    console.log(value);

    switch (value.class) {
      case 'btn-cancel':
        this.cancel();
        break;
      case 'btn-save':
        this.save(value.data)
        break;
      default:
        break;
    }
    this.dialogRef.close();
  }

  cancel = () => {
  }

  save = (value) => {
    this.dataModel = value;
  }

}
