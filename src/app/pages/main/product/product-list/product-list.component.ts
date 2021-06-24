import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductUpdateComponent } from '../product-update/product-update.component';
import { ProductDeleteComponent } from '../product-delete/product-delete.component';
import { ImportExcelComponent } from 'src/app/components/dialog/import-excel/import-excel.component';
import { ProductionService } from 'src/app/services/production.service';
import { ExportExcelService } from 'src/app/services/base-export-excel.service';
import { FormatDateService } from 'src/app/services/format-date.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  listFilter;
  config = new Product();
  value: string;
  dataSub = [];
  listActive;
  dataTable;
  data = [];
  timer;

  constructor(
    private dialog: MatDialog,
    private productService: ProductionService,
    private exportExcel: ExportExcelService,
    private formatDate: FormatDateService
  ) { }

  ngOnInit(): void {
    this.listFilter = this.config.filter;
    this.dataTable = this.config.collums;
    this.listFilter[2].data = [
      {
        name: 'Cho quét',
        value: 1
      },
      {
        name: 'Không cho quét',
        value: 2
      },
      {
        name: 'chưa có thông tin',
        value: 3
      },

      {
        name: 'Đã ẩn bởi DNSH',
        value: 4
      },
    ];
    this.listFilter[3].data = [
      {
        name: 'Yêu cầu duyệt',
        value: 1
      },
      {
        name: 'Đã duyệt',
        value: 2
      },
      {
        name: 'Tạm duyệt',
        value: 3
      },
      {
        name: 'Từ chối duyệt',
        value: 4
      }
    ]
    this.listActive = this.config.btnActice;
    this.getlistProduct();
  }

  getlistProduct() {
    this.productService.getListProduct("", "", "", "", "", 1, 50).subscribe(res => {
      this.data = res;
      this.dataSub = this.data;
      this.dataSub.map(x => {
        x.TypeString = (x.Type === 1 ? "Cho quét" : x.Type === 2 ? 'Không cho quét' : x.Type === 3 ? "Chưa có thông tin" : x.Type === 4 ? "Đã ẩn bởi DNSH": "");
        x.StatusString = (x.Status === 1 ? "Yêu cầu duyệt" : x.Status === 2 ? 'Đã duyệt' : x.Status === 3 ? "Tạm duyệt" : x.Status === 4 ? "Từ chối duyệt" : "");
      })
    })
  }
  handleCallback(ev) {
    if (ev.condition === 'ProductCode') {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.productService.getListProduct("", "", ev.value, "", "", 1, 50).subscribe(res => {
          this.dataSub = res;
          this.dataSub.map(x => {
            x.TypeString = (x.Type === 1 ? "Cho quét" : x.Type === 2 ? 'Không cho quét' : x.Type === 3 ? "Chưa có thông tin" : x.Type === 4 ? "Đã ẩn bởi DNSH": "");
            x.StatusString = (x.Status === 1 ? "Yêu cầu duyệt" : x.Status === 2 ? 'Đã duyệt' : x.Status === 3 ? "Tạm duyệt" : x.Status === 4 ? "Từ chối duyệt" : "");
          })
        })
      }, 500);

    }
    if (ev.condition === 'Name') {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.productService.getListProduct(ev.value, "", "", "", "", 1, 50).subscribe(res => {
          this.dataSub = res;
          this.dataSub.map(x => {
            x.TypeString = (x.Type === 1 ? "Cho quét" : x.Type === 2 ? 'Không cho quét' : x.Type === 3 ? "Chưa có thông tin" : x.Type === 4 ? "Đã ẩn bởi DNSH": "");
            x.StatusString = (x.Status === 1 ? "Yêu cầu duyệt" : x.Status === 2 ? 'Đã duyệt' : x.Status === 3 ? "Tạm duyệt" : x.Status === 4 ? "Từ chối duyệt" : "");
          })
        })
      }, 500);

    }
    if (ev.condition === 'Type') {
      this.productService.getListProduct("", "", "", ev.value, "", 1, 50).subscribe(res => {
        this.dataSub = res;
        this.dataSub.map(x => {
          x.TypeString = (x.Type === 1 ? "Cho quét" : x.Type === 2 ? 'Không cho quét' : x.Type === 3 ? "Chưa có thông tin" : x.Type === 4 ? "Đã ẩn bởi DNSH": "");
          x.StatusString = (x.Status === 1 ? "Yêu cầu duyệt" : x.Status === 2 ? 'Đã duyệt' : x.Status === 3 ? "Tạm duyệt" : x.Status === 4 ? "Từ chối duyệt" : "");
        })
      })
    };
    if (ev.condition === 'Status') {
      this.productService.getListProduct("", "", "", "", ev.value, 1, 50).subscribe(res => {
        this.dataSub = res;
        this.dataSub.map(x => {
          x.TypeString = (x.Type === 1 ? "Cho quét" : x.Type === 2 ? 'Không cho quét' : x.Type === 3 ? "Chưa có thông tin" : x.Type === 4 ? "Đã ẩn bởi DNSH": "");
          x.StatusString = (x.Status === 1 ? "Yêu cầu duyệt" : x.Status === 2 ? 'Đã duyệt' : x.Status === 3 ? "Tạm duyệt" : x.Status === 4 ? "Từ chối duyệt" : "");
        })
      })
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
          "Ảnh": x.MediaURL,
          "Mã sản phẩm": x.ProductCode,
          "Trạng thái quét": x.TypeString,
          "Trạng thái thông tin":x.StatusString,
          "Lượt quét": x.ScanNumber,
          "Lượt đánh giá": x.RatingNumber,
          "Cập nhật": x.UpdatedOn === null ? "" : this.formatDate.formatDate(x.UpdatedOn, 'DD/MM/YYYY'),
        }
      })
      this.exportExcel.exportExcel(this.dataSub, "product-data");
      return this.dataSub = this.data;
    }
    if (ev.type === 'create') {
      return this.dialog.open(ProductAddComponent, {
        width: '940px',
        height: '843px'
      }).afterClosed().subscribe(result => {
        this.getlistProduct();
      });
    }
    if (ev.type === 'import') {
      return this.dialog.open(ImportExcelComponent, {
        width: '500px',
        height: '350px',
        data: 'assets/files/production-business.xlsx'
      }).afterClosed().subscribe(result => {
      });
    }
    if (ev.type === 'edit') {
      return this.dialog.open(ProductUpdateComponent, {
        width: '940px',
        height: '843px',
        data: ev.item
      }).afterClosed().subscribe(result => {
        this.getlistProduct();
      });
    }
    if (ev.type === 'delete') {
      return this.dialog.open(ProductDeleteComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá sản phẩm",
          content: "Bạn có muốn xoá sản phẩm trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getlistProduct();
      });
    }
    if (ev.type === 'delete-all') {
      return this.dialog.open(ProductDeleteComponent, {
        width: '400px',
        height: '250px',
        data: {
          item: ev.item,
          title: "Xoá sản phẩm",
          check: 'delete-all',
          content: "Bạn có muốn xoá sản phẩm trên hệ thống?"
        }
      }).afterClosed().subscribe(result => {
        this.getlistProduct();
      });
    }
  }



}
