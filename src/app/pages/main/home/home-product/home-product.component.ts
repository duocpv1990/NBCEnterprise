import { Component, OnInit } from '@angular/core';
import { HomeProduct } from 'src/app/models/home-product.model';




@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.scss']
})
export class HomeProductComponent implements OnInit {
  listFilter;
  config = new HomeProduct();
  value: string;
  dataSub = [];
  tableData = [];
  listActive;
  dataTable;
  data = [
    {
      stt: 1,
      productName: 'Bút bi Thiên Long',
      gtinCode: '123456789',
      contractPackage: 'Gói cơ bản',
      register: 'Công ty TNHH Việt An',
      authorization: {
        name: 'DNSH-NSX',
        type: 'Toàn quyền'
      },
      status: 'Cho quét',
      condition: 'Đã duyệt',
      scanCount: 6
    },
    {
      stt: 2,
      productName: 'Bút bi Thiên Long',
      gtinCode: '123456789',
      contractPackage: 'Gói cơ bản',
      register: 'Công ty TNHH Việt An',
      authorization: {
        name: 'DNSH-NSX',
        type: 'Toàn quyền'
      },
      status: 'Cho quét',
      condition: 'Đã duyệt',
      scanCount: 6
    },
    {
      stt: 3,
      productName: 'Bút bi Thiên Long',
      gtinCode: '123456789',
      contractPackage: 'Gói cơ bản',
      register: 'Công ty TNHH Việt An',
      authorization: {
        name: 'DNSH-NSX',
        type: 'Toàn quyền'
      },
      status: 'Cho quét',
      condition: 'Đã duyệt',
      scanCount: 6
    },
    {
      stt: 4,
      productName: 'Bút bi Thiên Long',
      gtinCode: '123456789',
      contractPackage: 'Gói cơ bản',
      register: 'Công ty TNHH Việt An',
      authorization: {
        name: 'DNSH-NSX',
        type: 'Toàn quyền'
      },
      status: 'Cho quét',
      condition: 'Đã duyệt',
      scanCount: 6
    },
    {
      stt: 5,
      productName: 'Bút bi Thiên Long',
      gtinCode: '123456789',
      contractPackage: 'Gói cơ bản',
      register: 'Công ty TNHH Việt An',
      authorization: {
        name: 'DNSH-NSX',
        type: 'Toàn quyền'
      },
      status: 'Cho quét',
      condition: 'Đã duyệt',
      scanCount: 6
    }
  ];

  constructor(

  ) { }

  ngOnInit(): void {
    this.listFilter = this.config.filter;
    this.tableData = this.config.collums;
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.dataSub = this.data;
  }

  handleCallback(ev) {
    const filter = this.listFilter.filter(x => x.value);
    if (!filter.length) return this.dataSub = this.data;
    filter.forEach((x, ix) => {
      if (ix === 0) {
        if (x.type === 'text' || x.type === 'search') {
          this.dataSub = this.data.filter(
            (a) => a[x.condition].toLowerCase().indexOf(x.value.toLowerCase()) > -1);
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

  handleCallbackTable(ev) {

  }


}
