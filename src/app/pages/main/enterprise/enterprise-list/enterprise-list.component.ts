import { Component, OnInit } from '@angular/core';
import { EnterPriseModel } from 'src/app/models/enterprise.model';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnInit {
  config = new EnterPriseModel();
  listFilter = [];
  data = [
    {
      "stt": "1",
      "code": "023456781",
      "global": '023456781',
      "register": 'Công ty TNHH Việt An',
      "gt": '1 giấy tờ',
      "status": "Đã duyệt",
      "update": "13:30, 21/04/2021"

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
  dataSub;
  constructor() { }

  ngOnInit(): void {
    this.listFilter = this.config.filter;
    this.dataTable = this.config.collums;
    this.dataSub = this.data;
  }
  handleCallback(ev){
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
  handleCallbackTable($event){

  }

}
