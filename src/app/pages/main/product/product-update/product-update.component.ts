import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  conFig = new Product();
  dataModel;
  option = {
    title: 'THÔNG TIN SẢN PHẨM',
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


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProductUpdateComponent>,
  ) { }

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
