import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { from } from 'rxjs';
import { AddCertificateComponent } from 'src/app/components/dialog/add-certificate/add-certificate.component';
import { Product } from 'src/app/models/product.model';
import { categories, contries } from './product-mock';

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
  imageUrl: string;
  chips = [];
  chipInput = '';
  categories = categories;
  contries = contries;

  constructor(
    private dialogRef: MatDialogRef<ProductAddComponent>,
    private dialog: MatDialog
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

  addCertificate() {
    this.dialog.open(AddCertificateComponent)
  }

}
