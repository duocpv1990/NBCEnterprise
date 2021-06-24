import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportExcelComponent } from 'src/app/components/dialog/import-excel/import-excel.component';
import { DistributorModel } from 'src/app/models/distributor.model';
import { WardService } from 'src/app/services/city-district.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { DeleteEnterpriseComponent } from '../../enterprise/delete-enterprise/delete-enterprise.component';
import { CreateDistributorComponent } from '../create-distributor/create-distributor.component';
import { DeleteDistributorComponent } from '../delete-distributor/delete-distributor.component';
import { EditDistributorComponent } from '../edit-distributor/edit-distributor.component';

@Component({
  selector: 'app-distributor-list',
  templateUrl: './distributor-list.component.html',
  styleUrls: ['./distributor-list.component.scss']
})
export class DistributorListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private distributorService: DistributorService,
    private wardService: WardService
  ) { }
  config = new DistributorModel();
  listFilter = [];
  data = [];
  dataTable;
  listActive;
  dataSub;
  ngOnInit(): void {
    this.getListDistributor();
    this.listFilter = this.config.filter;
    this.wardService.getAllCity(916).subscribe(res => {
      this.listFilter[1].data = res.map(x => {
        return {
          name: x.Name,
          value: x.ProvinceId
        }
      })
    })
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.dataSub = this.data;
  }
  getListDistributor(){
    this.distributorService.getListDistributor("", "", 1, 50).subscribe(res => {
      this.data = res;
      this.dataSub = this.data;
      this.dataSub.forEach((x, index) => {
         x.stt = index + 1;
      });
    })
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
    if(ev.type === "edit"){
      return this.dialog.open(EditDistributorComponent, {
        width: '940px',
        height: '843px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListDistributor();
      });
    }
    if (ev.type === 'create') {
      return this.dialog.open(CreateDistributorComponent, {
        width: '940px',
        height: '843px'
      }).afterClosed().subscribe(result => {
        this.getListDistributor();
      });
    }
    if (ev.type === 'import') {
      return this.dialog.open(ImportExcelComponent, {
        width: '500px',
        height: '350px',
        data: 'assets/files/distributor-business.xlsx'
      }).afterClosed().subscribe(result => {
      });
    }
    if (ev.type === 'delete') {
      return this.dialog.open(DeleteDistributorComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá nhà phân phối",
          content: "Bạn có muốn xoá thông tin nhà phân phối trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getListDistributor();
      });
    }
    if (ev.type === 'delete-all') {
      return this.dialog.open(DeleteDistributorComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá nhà phân phối",
          check: "delete-all",
          content: "Bạn có muốn xoá thông tin nhà phân phối trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getListDistributor();
      });
    }

  }

}
