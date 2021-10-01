import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  conFig = new Product();
  dataModel = {};
  option = {
    title: 'Thêm mới sản phẩm',
    type: 'create'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  },
  {
    class: 'btn-save',
    text: 'Lưu'
  }];

  listCreate = [];

  constructor(
    private dialogRef: MatDialogRef<ProductAddComponent>,
  ) { }


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
