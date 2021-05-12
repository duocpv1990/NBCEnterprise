import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShopModel } from 'src/app/models/shop.model';
import { ShopCreateComponent } from '../shop-create/shop-create.component';
import { ShopDeleteComponent } from '../shop-delete/shop-delete.component';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }
  config = new ShopModel();
  listFilter = [];
  data = [
    {
      "stt": "1",
      "code": "023456781",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021",
      "MediaURL": "assets/img/default-avatar.jpg"
    },
    {
      "stt": "2",
      "code": "023456781",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"

    },
    {
      "stt": "3",
      "code": "023456781",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"

    },
    {
      "stt": "4",
      "code": "023456781",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"

    },
    {
      "stt": "5",
      "code": "023456781",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"

    },
    {
      "stt": "6",
      "code": "023456781",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"

    },


  ];
  dataTable;
  listActive;
  ngOnInit(): void {
    this.listFilter = this.config.filter;
    this.listActive = this.config.btnActice;
    this.dataTable = this.config.collums;
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
