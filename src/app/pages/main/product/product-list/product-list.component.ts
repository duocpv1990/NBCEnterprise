import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listFilter;
  config = new Product();
  value: string;
  dataSub = [];
  data = [];
  tableData = [];

  constructor() { }

  ngOnInit(): void {
    this.listFilter = this.config.filter;
    this.tableData = this.config.collums;
  }

  handleCallback = (value?) => {
    const filter = this.listFilter.filter(x => x.value);
    if (this.value) {
      this.dataSub = this.data.filter(x => x.trang_thai === this.value);
      if (filter.length) {
        filter.forEach(x => {
          if (x.type === 'text' || x.type === 'search') {
            this.dataSub = this.dataSub.filter(
              (a) => a[x.condition].toString().toLowerCase().indexOf(x.value.toLowerCase()) > -1);
          } else {
            this.dataSub = this.dataSub.filter((a) => a[x.condition] == x.value);
          }
        });
      }
    }

    if (!this.value) {
      if (!filter.length) return this.dataSub = this.data;
      filter.forEach((x, ix) => {
        if (ix === 0) {
          if (x.type === 'text' || x.type === 'search') {
            this.dataSub = this.data.filter(
              (a) => a[x.condition].toString().toLowerCase().indexOf(x.value.toLowerCase()) > -1);
          } else {
            this.dataSub = this.data.filter((a) => a[x.condition] == x.value);
          }
        } else {
          if (x.type === 'text' || x.type === 'search') {
            this.dataSub = this.dataSub.filter(
              (a) => a[x.condition].toLowerCase().indexOf(x.value.toLowerCase()) > -1);
          } else {
            this.dataSub = this.dataSub.filter((a) => a[x.condition] == x.value);
          }
        }

      });
    }
  }



}
