import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { map } from 'rxjs/operators';
import { AddCertificateComponent } from 'src/app/components/dialog/add-certificate/add-certificate.component';
import { Product } from 'src/app/models/product.model';
import { WardService } from 'src/app/services/city-district.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { FormatDateService } from 'src/app/services/format-date.service';
import { ProductionService } from 'src/app/services/production.service';
import { StoreService } from 'src/app/services/store.service';
import { categories, contries } from '../product-add/product-mock';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { isThisTypeNode } from 'typescript';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})

export class ProductUpdateComponent extends BaseUploadComponent implements OnInit {
  model: any = {};
  listCreate = [];
  imageUrl: string = 'https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg';
  categories: any = [];
  distributorName: string;
  listStore: any = [];
  listDistributor: any = [];
  listSearchStore: any = [];
  listSearchDistributor: any = [];
  fileImg;
  chipInput = '';
  chips: any = [];
  dataModel: any = {};
  listCertification: any = [];
  listIdCertification: any = [];
  certificationDetail: any = [];
  listTargetMarket: any = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public s3Service: S3FileService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ProductUpdateComponent>,
    private productService: ProductionService,
    private storeService: StoreService,
    private distributorService: DistributorService,
    private formatDate: FormatDateService
  ) { super(s3Service) }



  ngOnInit(): void {
    this.productService.getProductionDetail(this.data.ProductId).subscribe(res => {
      this.dataModel = res;
      this.imageUrl = this.dataModel.ProductMedias[0].MediaURL;
      this.productService.getCategory().subscribe(data => {
        this.categories = data;
        this.categories.forEach(x => {
          if (this.dataModel.Category === x.Name) {
            this.dataModel.CategoryId = x.CategoryId;
          }
        });
      });
      
       console.log(this.dataModel);
       
    });
    this.storeService.getListStore("", "", 1, 1, 50).subscribe(res => {
      this.listStore = res;
    }),
      this.distributorService.getListDistributor("", "", 1, 50).subscribe(res => {
        this.listDistributor = res;
        this.dataModel.DistributorName = this.dataModel.DistributorProducts[0].Name;
        this.dataModel.StoreName = this.dataModel.DistributorProducts[0].DistributorProductStores[0].Name;
      });
    this.productService.getTargetMarket().subscribe(res => {
      this.listTargetMarket = res;
    });
    this.productService.getCategory().subscribe(res => {
      this.categories = res;
    })
    this.getListCertificate();
  }

  addChip(value) {
    this.chips.push(value);
    this.dataModel.Ingradient = this.chips.join();
    this.chipInput = '';
  }

  removeChip(index) {
    this.chips.splice(index, 1);
  }

  selectStore(value) {
    this.dataModel.StoreId = value.StoreId;
    this.dataModel.StoreName = value.Name;
    this.listSearchStore = [];
  }
  selectDistributor(value) {
    this.dataModel.DistributorId = value.DistributorId;
    this.dataModel.DistributorName = value.Name;
    this.listSearchDistributor = [];
  }
  autocomplete(name) {
    if (!name) return this.listSearchDistributor = [];
    this.listSearchStore = this.listStore.filter(x => x.Name.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }
  autocompleteDistributor(name) {
    if (!name) return this.listSearchDistributor = [];
    this.listSearchDistributor = this.listDistributor.filter(x => x.Name.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }
  // handleCallbackEvent = (value) => {
  //   console.log(value);

  //   switch (value.class) {
  //     case 'btn-cancel':
  //       this.cancel();
  //       break;
  //     case 'btn-save':
  //       this.save(value)
  //       break;
  //     default:
  //       break;
  //   }

  // }

  cancel = () => {
  }

  save = () => {
    if (this.fileImg) {
      this.selectImage(this.fileImg).subscribe(res => { }, (err) => { }, () => {
        let modelImg = {
          "ProductId": this.dataModel.ProductId,
          "MediaURL": this.imageLinkUpload,
          "Type": 3,
          "Status": 1
        };
        this.productService.createImgProduct(modelImg).subscribe(res => {
          this.dialogRef.close();
        })
      })
    }
    else {
      this.dataModel.CategoryId = +this.dataModel.CategoryId;
      this.dataModel.TargetMarketId = +this.dataModel.TargetMarketId;
      this.productService.editProduct(this.dataModel.ProductId, this.dataModel).subscribe(res => {
        this.dialogRef.close();
      });
    }
  }
  getListCertificate() {
    this.productService.getProductionCertificate(this.data.ProductId).subscribe(res => {
      this.certificationDetail = res;
    })
  }

  addCertificate() {
    this.dialog.open(AddCertificateComponent, {}).afterClosed().subscribe(result => {
      if (result) {
        this.certificationDetail.push(result);
        console.log(this.certificationDetail);
        const model = {
          "CertificationId": result.CertificationId,
          "ProductId": this.data.ProductId,
          "Type": 1,
          "Status": 1
        }
        this.productService.createCertificate(model).subscribe(res => {
        })
      }
    });
  }

  processFile(files: File) {
    if (!files) return;
    this.fileImg = files;
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imageUrl = reader.result.toString();
    };
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
