import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteComponent } from 'src/app/components/dialog/delete/delete.component';
import { ImportExcelComponent } from 'src/app/components/dialog/import-excel/import-excel.component';
import { EnterPriseModel } from 'src/app/models/enterprise.model';
import { ExportExcelService } from 'src/app/services/base-export-excel.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { FormatDateService } from 'src/app/services/format-date.service';
import { DeleteEnterpriseComponent } from '../delete-enterprise/delete-enterprise.component';
import { EnterpriseCreateComponent } from '../enterprise-create/enterprise-create.component';
import { EnterpriseEditComponent } from '../enterprise-edit/enterprise-edit.component';

@Component({
  selector: 'app-enterprise-list',
  templateUrl: './enterprise-list.component.html',
  styleUrls: ['./enterprise-list.component.scss']
})
export class EnterpriseListComponent implements OnInit {
  config = new EnterPriseModel();
  listFilter = [];
  data = [];
  dataTable;
  listActive;
  dataSub;
  timer;
  constructor(
    private dialog: MatDialog,
    private enterprise: EnterpriseService,
    private exportService: ExportExcelService,
    private formatDate: FormatDateService
  ) { }

  ngOnInit(): void {
    this.listFilter = this.config.filter;
    this.listFilter[2].data = [
      {
        name: "Chờ duyệt",
        value: 1
      },
      {
        name: "Đã duyệt",
        value: 2
      },
      {
        name: "Từ chối",
        value: 3
      }
    ]
    this.dataTable = this.config.collums;
    this.listActive = this.config.btnActice;
    this.dataSub = this.data;
    this.getListCompany();
  }

  getListCompany() {
    this.enterprise.getListCompany("", "", "", 1, 50).subscribe(res => {
      this.data = res;
      this.dataSub = this.data;
      this.dataSub.forEach((x, index) => {
        x.stt = index + 1;
        if (x.Status === 1) {
          x.StatusString = "Chờ duyệt"
        }
        else if (x.Status === 2) {
          x.StatusString = "Đã duyệt"
        }
        else {
          x.StatusString = "Từ chối"
        }
      });
    })
  }

  getListFilter(companyCode, companyName, status, pageNumber, pageSive) {
    this.enterprise.getListCompany(companyCode, companyName, status, pageNumber, pageSive).subscribe(res => {
      this.dataSub = res;
      this.dataSub.forEach((x, index) => {
        x.stt = index + 1;
        if (x.Status === 1) {
          x.StatusString = "Chờ duyệt"
        }
        else if (x.Status === 2) {
          x.StatusString = "Đã duyệt"
        }
        else {
          x.StatusString = "Từ chối"
        }
      });
    })
  }

  handleCallback(ev) {
    console.log(ev);
    if (ev.condition === 'CompanyCode') {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getListFilter(ev.value, "", "", 1, 50);
      }, 500);
    }
    if (ev.condition === 'Name') {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getListFilter("", ev.value, "", 1, 50);
      }, 500);
    }
    if (ev.condition === 'Status') {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getListFilter("", "", ev.value, 1, 50);
      }, 500);
    }

  }
  // handleCallback(ev) {
  //   const filter = this.listFilter.filter(x => x.value);
  //   if (!filter.length) return this.dataSub = this.data;
  //   filter.forEach((x, ix) => {
  //     if (ix === 0) {
  //       if (x.type === 'text' || x.type === 'search') {
  //         this.dataSub = this.data.filter(
  //           (a) => a[x.condition].toLowerCase().indexOf(x.value.toLowerCase()) > -1);
  //       } else {
  //         this.dataSub = this.data.filter((a) => a[x.condition] == x.value);
  //       }
  //     } else {
  //       if (x.type === 'text' || x.type === 'search') {
  //         this.dataSub = this.dataSub.filter(
  //           (a) => a[x.condition].toLowerCase().indexOf(x.value.toLowerCase()) > -1);
  //       } else {
  //         this.dataSub = this.dataSub.filter((a) => a[x.condition] == x.value);
  //       }
  //     }

  //   });
  // }
  handleCallbackTable(ev) {
    if(ev.type === "export"){
      this.dataSub = this.dataSub.map(x => {
        return {
          "STT": x.stt,
          "Mã doanh nghiệp": x.CompanyCode,
          "Mã địa điểm toàn cầu": x.GLN,
          "Tên đăng ký": x.Name,
          "Giấy tờ": x.CertificateNumber,
          "Trạng thái":x.StatusString,
          "Cập nhật": x.UpdatedOn === null ? "" : this.formatDate.formatDate(x.UpdatedOn, 'DD/MM/YYYY'),
          
        }
      })
      this.exportService.exportExcel(this.dataSub, "business");
      return this.dataSub = this.data;
    }
    console.log(ev);
    if (ev.type === 'create') {
      return this.dialog.open(EnterpriseCreateComponent, {
        width: '940px',
        height: '843px'
      }).afterClosed().subscribe(result => {
        this.getListCompany();
      });
    }
    if (ev.type === 'import') {
      return this.dialog.open(ImportExcelComponent, {
        width: '500px',
        height: '350px',
        data: 'assets/files/business.xlsx'
      }).afterClosed().subscribe(result => {
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(EnterpriseEditComponent, {
        width: '940px',
        height: '843px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getListCompany();
      });
    }
    if (ev.type === 'delete') {
      return this.dialog.open(DeleteEnterpriseComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá doanh nghiệp",
          content: "Bạn có muốn xoá thông tin doanh nghiệp trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getListCompany();
      });
    }
    if (ev.type === 'delete-all') {
      return this.dialog.open(DeleteEnterpriseComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá doanh nghiệp",
          check: "delete-all",
          content: "Bạn có muốn xoá thông tin doanh nghiệp trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getListCompany();
      });
    }
  }

}
