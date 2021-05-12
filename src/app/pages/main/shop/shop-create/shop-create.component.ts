import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EnterPriseModel } from 'src/app/models/enterprise.model';
import { ShopModel } from 'src/app/models/shop.model';
import { EnterpriseCreateComponent } from '../../enterprise/enterprise-create/enterprise-create.component';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.scss']
})
export class ShopCreateComponent implements OnInit {

  conFig = new ShopModel;
  dataModel = {};
  option = {
      title: 'Thêm mới điểm bán',
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
    private dialogRef: MatDialogRef<ShopCreateComponent>,
  ) { }
  listCreate = [];

  ngOnInit(): void {
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
