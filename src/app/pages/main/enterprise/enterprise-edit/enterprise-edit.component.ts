import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnterPriseModel } from 'src/app/models/enterprise.model';

@Component({
  selector: 'app-enterprise-edit',
  templateUrl: './enterprise-edit.component.html',
  styleUrls: ['./enterprise-edit.component.scss']
})
export class EnterpriseEditComponent implements OnInit {
 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EnterpriseEditComponent>,
  ) { }
  conFig = new EnterPriseModel;
  dataModel;
  option = {
      title: 'THÔNG TIN DOANH NGHIỆP',
      type: 'edit'
  };

  arrayButton = [{
      class: 'btn-cancel',
      text: 'Hủy bỏ'
  },
  {
      class: 'btn-save',
      text: 'Chỉnh sửa'
  }]
  listCreate = [];

  ngOnInit(): void {
      
      this.dataModel = this.data;
      this.listCreate = this.conFig.create;
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
