import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { from } from 'rxjs';
import { AddCertificateComponent } from 'src/app/components/dialog/add-certificate/add-certificate.component';
import { Product } from 'src/app/models/product.model';
import { WardService } from 'src/app/services/city-district.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ProductionService } from 'src/app/services/production.service';
import { StoreService } from 'src/app/services/store.service';
import { categories, contries } from './product-mock';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent extends BaseUploadComponent implements OnInit {
  conFig = new Product();
  dataModel: any = {};
  listCreate = [];
  imageUrl: string;
  chips = [];
  chipInput = '';
  categories: any = [];
  contries = contries;
  model: any = {}
  listStore: any = [];
  listDistributor: any = [];
  listSearchStore: any = [];
  listSearchDistributor: any = [];
  fileImg;
  listCertification: any = [];
  listTargetMarket: any = [];
  listIdCertification: any = [];
  timer;
  disable = false;
  listCompany: any = [];
  constructor(
    public s3Service: S3FileService,
    private dialogRef: MatDialogRef<ProductAddComponent>,
    private dialog: MatDialog,
    private storeService: StoreService,
    private wardService: WardService,
    private distributor: DistributorService,
    private productionService: ProductionService,
    private loaderService: LoaderService,
    private companyService: EnterpriseService

  ) { super(s3Service) }

  ngOnInit(): void {
    this.listCreate = this.conFig.create;
    this.wardService.getNation().subscribe(res => {
      this.contries = res;
    });
    this.productionService.getTargetMarket().subscribe(res => {
      this.listTargetMarket = res;
    });
    this.productionService.getCategory().subscribe(res => {
      this.categories = res;
    })
  }

  check(ev: any) {

  }
  getListCompany(name) {
    this.companyService.getListCompany("", name, "", 1, 50).subscribe(res => {
      this.listCompany = res;
    });
  }

  searchCompany(keyword){
    if (!keyword) {
      this.listCompany = [];
    }
    else {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getListCompany(keyword);
      }, 100);
    }
  }

  selectCompany(value){
    this.model.CompanyId = value.CompanyId;
    this.model.CompanyName = value.Name;
    this.listCompany = [];
  }

  getListStore(name) {
    this.storeService.getListStore(name, "", "", 1, 50).subscribe(res => {
      this.listSearchStore = res;
    });
  }

  getListDistributor(name) {
    this.distributor.getListDistributor(name, "", 1, 50).subscribe(res => {
      this.listSearchDistributor = res;
    });
  }
  selectStore(value) {
    this.model.StoreId = value.StoreId;
    this.model.StoreName = value.Name;
    this.listSearchStore = [];
  }
  selectDistributor(value) {
    this.model.DistributorId = value.DistributorId;
    this.model.DistributorName = value.Name;
    this.listSearchDistributor = [];
  }
  autocomplete(name: string) {
    if (!name) {
      this.listSearchStore = [];
    }
    else {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getListStore(name);
      }, 100);
    }
  }

  autocompleteDistributor(name) {
    if (!name) {
      this.listSearchDistributor = [];
    }
    else {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getListDistributor(name);
      }, 100);
    }
  }
  cancel = () => {
  }
  save = () => {
    this.loaderService.show();
    this.model.Price = +this.model.Price;
    this.model.TargetMarketId = +this.model.TargetMarketId;
    this.model.CategoryId = +this.model.CategoryId;
    this.model.Status = 1;
    let DistributorProducts = [
      {
        "DistributorId": this.model.DistributorId,
        "Type": 1,
        "Status": 1,
        "DistributorProductStores": [
          {
            "StoreId": this.model.StoreId,
            "Type": 1,
            "Status": 1
          }
        ]
      }
    ];
    this.model.DistributorProducts = DistributorProducts;
    if (this.fileImg) {
      this.selectImage(this.fileImg).subscribe(res => { }, (err) => { this.loaderService.hide() }, () => {
        let ProductMedias = [
          {
            "MediaURL": this.imageLinkUpload,
            "Type": 3,
            "Status": 1
          }
        ];
        this.model.ProductMedias = ProductMedias;
        this.productionService.createProduct(this.model).subscribe(res => {
          this.loaderService.hide();
          this.dialogRef.close();
        }, (err) => {
          this.loaderService.hide();
          this.dialogRef.close();
        })
      });
    }
    else {
      let ProductMedias = [
        {
          "MediaURL": "https://nbc-files.s3.ap-southeast-1.amazonaws.com/4-b84dc417-5afb-46ed-a046-8dd7281727cd.jpg",
          "Type": 3,
          "Status": 1
        }
      ];
      this.model.ProductMedias = ProductMedias;
      this.productionService.createProduct(this.model).subscribe(res => {
        this.loaderService.hide();
        this.dialogRef.close();
      }, () => {
        this.loaderService.hide();
        this.dialogRef.close();
      })
    }



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

  addChip(value) {
    this.chips.push(value);
    this.model.Ingredient = this.chips.join();
    this.chipInput = '';
  }

  removeChip(index) {
    this.chips.splice(index, 1);
    this.model.Ingredient = this.chips.join();
  }


  closeDialog() {
    this.dialogRef.close();
  }

  addCertificate() {
    this.dialog.open(AddCertificateComponent, {}).afterClosed().subscribe(result => {
      if (result) {
        this.listCertification.push(result);
        this.listIdCertification.push(result.CertificationId);
        this.model.CertificationIdList = this.listIdCertification;
        console.log(this.model);
      }
    });
  }

}
