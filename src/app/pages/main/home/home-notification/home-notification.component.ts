import { Component, OnInit } from '@angular/core';
import { NotificationModel } from 'src/app/models/notification.model';

@Component({
  selector: 'app-home-notification',
  templateUrl: './home-notification.component.html',
  styleUrls: ['./home-notification.component.scss']
})
export class HomeNotificationComponent implements OnInit {
  config = new NotificationModel();
  listFilter = [];
  data = [
    {
      time: '08:00 24/04/2021',
      title: 'Công ty TNHH MTV Phú An đã cập nhật thông tin doanh nghiệp'
    },
    {
      time: '08:00 24/04/2021',
      title: 'Công ty TNHH MTV Phú An đã cập nhật thông tin doanh nghiệp'
    },
    {
      time: '08:00 24/04/2021',
      title: 'Công ty TNHH MTV Phú An đã cập nhật thông tin doanh nghiệp'
    },
    {
      time: '08:00 24/04/2021',
      title: 'Công ty TNHH MTV Phú An đã cập nhật thông tin doanh nghiệp'
    },
    {
      time: '08:00 24/04/2021',
      title: 'Công ty TNHH MTV Phú An đã cập nhật thông tin doanh nghiệp'
    },
    {
      time: '08:00 24/04/2021',
      title: 'Công ty TNHH MTV Phú An đã cập nhật thông tin doanh nghiệp'
    }
  ];
  dataTable;
  listActive;
  dataSub;

  constructor() { }

  ngOnInit(): void {
    this.listFilter = this.config.filter;
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.dataSub = this.data;
  }

  tableFilter(ev) {
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

}
