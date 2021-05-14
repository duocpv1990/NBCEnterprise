import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DistributorModel } from 'src/app/models/distributor.model';
import { DeleteEnterpriseComponent } from '../../enterprise/delete-enterprise/delete-enterprise.component';
import { CreateDistributorComponent } from '../create-distributor/create-distributor.component';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.scss']
})
export class DistributorListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }
  config = new DistributorModel();
  listFilter = [];
  data = [
    {
      "stt": "1",
      "code": "023456781",
      "MediaURL": "https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg",
      "distributor": "Nhà phân phối số 1",
      'address': "Hàng Bồ - Hoàn Kiếm - Hà Nội",
      'area': 'Hà Nội',
      'production': 0,
      'phone': '0123456789',
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"
    },
    {
      "stt": "2",
      "code": "023456781",
      "MediaURL": "https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg",
      "distributor": "Nhà phân phối số 1",
      'address': "Hàng Bồ - Hoàn Kiếm - Hà Nội",
      'area': 'Hà Nội',
      'production': 0,
      'phone': '0123456789',
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"

    },
    {
      "stt": "3",
      "code": "023456781",
      "MediaURL": "https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021",
      "distributor": "Nhà phân phối số 1",
      'address': "Hàng Bồ - Hoàn Kiếm - Hà Nội",
      'area': 'Hà Nội',
      'production': 0,
      'phone': '0123456789',
    },
    {
      "stt": "4",
      "code": "023456781",
      "MediaURL": "https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021",
      "distributor": "Nhà phân phối số 1",
      'address': "Hàng Bồ - Hoàn Kiếm - Hà Nội",
      'area': 'Hà Nội',
      'production': 0,
      'phone': '0123456789',
    },
    {
      "stt": "5",
      "code": "023456781",
      "MediaURL": "https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021",
      "distributor": "Nhà phân phối số 1",
      'address': "Hàng Bồ - Hoàn Kiếm - Hà Nội",
      'area': 'Hà Nội',
      'production': 0,
      'phone': '0123456789',
    },
    {
      "stt": "6",
      "code": "023456781",
      "MediaURL": "https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg",

      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021",
      "distributor": "Nhà phân phối số 1",
      'address': "Hàng Bồ - Hoàn Kiếm - Hà Nội",
      'area': 'Hà Nội',
      'production': 0,
      'phone': '0123456789',

    },


  ];
  dataTable;
  listActive;
  dataSub;
  ngOnInit(): void {
    this.listFilter = this.config.filter;
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
      return this.dialog.open(CreateDistributorComponent, {
        width: '940px',
        height: '843px'
      }).afterClosed().subscribe(result => {
      });
    }

    if (ev.type === 'delete') {
      return this.dialog.open(DeleteEnterpriseComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá nhà phân phối",
          content: "Bạn có muốn xoá thông tin nhà phân phối trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
      });
    }

  }

}
