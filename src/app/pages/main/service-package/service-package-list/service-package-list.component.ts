import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicePackage } from 'src/app/models/service-package.model';
import { ServicePackageAddComponent } from '../service-package-add/service-package-add.component';

@Component({
  selector: 'app-service-package-list',
  templateUrl: './service-package-list.component.html',
  styleUrls: ['./service-package-list.component.scss']
})
export class ServicePackageListComponent implements OnInit {
  listFilter;
  config = new ServicePackage();
  value: string;
  dataSub = [];
  tableData = [];
  listActive;
  dataTable;
  data = [
    {
      servicePackageName: 'Gói MBTT 5 mã',
      createPerson: 'admin',
      createDate: '25-05-2021',
      lastEditDate: '25-05-2021',
      lastEditPerson: 'admin',
      condition: 'Hoạt động',
      status: 'Khóa',
      action: ''
    },
  ];

  constructor(private dialog: MatDialog) { }

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
    console.log(ev);
    if (ev.type === 'create') {
      return this.dialog.open(ServicePackageAddComponent, {
        width: '700px',
        height: '250px',
      }).afterClosed().subscribe(result => {
      });
    }
    // if (ev.type === 'import') {
    //   return this.dialog.open(ImportExcelComponent, {
    //     width: '500px',
    //     height: '350px'
    //   }).afterClosed().subscribe(result => {
    //   });
    // }
    // if (ev.type === 'edit') {
    //   return this.dialog.open(ProductUpdateComponent, {
    //     width: '940px',
    //     height: '843px',
    //     data: ev.item
    //   }).afterClosed().subscribe(result => {
    //   });
    // }
    // if (ev.type === 'delete') {
    //   return this.dialog.open(ProductDeleteComponent, {
    //     width: '400px',
    //     height: '250px',
    //     data: {
    //       item: ev.item,
    //       title: "Xoá sản phẩm",
    //       content: "Bạn có muốn xoá sản phẩm trên hệ thống?"
    //     }
    //   }).afterClosed().subscribe(result => {
    //   });
    // }
  }

}
