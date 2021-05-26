import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/models/product.model';
import { categories, contries } from '../product-add/product-mock';
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
  imageUrl: string = 'https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg';
  chips = [];
  chipInput = '';
  categories = categories;
  contries = contries;


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

  processFile(files: File) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imageUrl = reader.result.toString();
    };
  }

  addChip(value) {
    this.chips.push(value);
    this.chipInput = '';
  }

  removeChip() {
    this.chips.pop();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
