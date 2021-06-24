import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportExcelComponent } from 'src/app/components/dialog/import-excel/import-excel.component';
import { ShopModel } from 'src/app/models/shop.model';
import { WardService } from 'src/app/services/city-district.service';
import { StoreService } from 'src/app/services/store.service';
import { ShopCreateComponent } from '../shop-create/shop-create.component';
import { ShopDeleteComponent } from '../shop-delete/shop-delete.component';
import { ShopEditComponent } from '../shop-edit/shop-edit.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private storeService: StoreService,
    private wardService: WardService
  ) { }
  config = new ShopModel();
  listFilter = [];
  dataSub: any = [];
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
    this.wardService.getAllCity(916).subscribe(res => {
         let city = res.map(x => {
           return {
             name: x.Name,
             value: x.ProvinceId
           }
         });
         this.listFilter[1].data = city;
    })
  }
  getListStore(){
    this.storeService.getListStore("", "", "", 1, 50).subscribe(res => {
      this.data = res;
      this.data.forEach((x, index) => {
         x.stt = index + 1;
         if(x.Type === 1){
           x.TypeString = 'Online'
         }
         else{
           x.TypeString = 'Offline'
         }
      });
      this.dataSub = this.data;
    })
  }
  handleCallback(ev) {
    console.log(ev);
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
  handleCallbackTable(ev){
    console.log(ev);
    
    if (ev.type === 'create') {
      return this.dialog.open(ShopCreateComponent, {
        width: '940px',
        height: '843px'
      }).afterClosed().subscribe(result => {
        this.getListStore();
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(ShopEditComponent, {
        width: '940px',
        height: '843px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListStore();
      });
    }
    if (ev.type === 'import') {
      return this.dialog.open(ImportExcelComponent, {
        width: '500px',
        height: '350px',
        data: 'assets/files/store-business.xlsx'
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
          check: "delete",
          content: "Bạn có muốn xoá thông tin điểm bán trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getListStore();
      });
    }
    if (ev.type === 'delete-all') {
      return this.dialog.open(ShopDeleteComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá điểm bán",
          check: "delete-all",
          content: "Bạn có muốn xoá thông tin điểm bán trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getListStore();
      });
    }
  }

}
