import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportExcelComponent } from 'src/app/components/dialog/import-excel/import-excel.component';
import { ShopModel } from 'src/app/models/shop.model';
import { StoreService } from 'src/app/services/store.service';
import { ShopCreateComponent } from '../shop-create/shop-create.component';
import { ShopDeleteComponent } from '../shop-delete/shop-delete.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private storeService: StoreService
  ) { }
  config = new ShopModel();
  listFilter = [];

  data = [];
  dataTable;
  listForm =  [
    {
      "name": "Cửa hàng online",
      "value": "1",
    },
    {
      "name": "Cửa hàng offline",
      "value": "2",
    }
  ]
  listActive;
  ngOnInit(): void {
    this.getListStore();
    this.listFilter = this.config.filter;
    this.listActive = this.config.btnActice;
    this.listFilter[2].data = this.listForm;
    this.dataTable = this.config.collums;
  }
  getListStore(){
    this.storeService.getListStore("", "", 1, 1, 50).subscribe(res => {
      this.data = res;
      this.data.forEach((x, index) => {
         x.stt = index + 1;
      });
    })
  }
  handleCallback(ev){

  }
  handleCallbackTable(ev){
    if (ev.type === 'create') {
      return this.dialog.open(ShopCreateComponent, {
        width: '940px',
        height: '843px'
      }).afterClosed().subscribe(result => {
      });
    }
    if (ev.type === 'import') {
      return this.dialog.open(ImportExcelComponent, {
        width: '500px',
        height: '350px'
      }).afterClosed().subscribe(result => {
      });
    }
    if (ev.type === 'delete') {
      return this.dialog.open(ShopDeleteComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá điểm bán",
          content: "Bạn có muốn xoá thông tin điểm bán trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
      });
    }
  }

}
