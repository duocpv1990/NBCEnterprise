import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { from } from 'rxjs';
import { AddCertificateComponent } from 'src/app/components/dialog/add-certificate/add-certificate.component';
import { Product } from 'src/app/models/product.model';
import { WardService } from 'src/app/services/city-district.service';
import { DistributorService } from 'src/app/services/distributor.service';
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
  dataModel = {};
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
  constructor(
    public s3Service: S3FileService,
    private dialogRef: MatDialogRef<ProductAddComponent>,
    private dialog: MatDialog,
    private storeService: StoreService,
    private wardService: WardService,
    private distributor: DistributorService,
    private productionService: ProductionService

  ) { super(s3Service) }

  ngOnInit(): void {
    this.listCreate = this.conFig.create;
    this.storeService.getListStore("", "", 1, 1, 50).subscribe(res => {
      this.listStore = res;
    }),
      this.distributor.getListDistributor("", "", 1, 50).subscribe(res => {
        this.listDistributor = res;
      });
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
  autocomplete(name) {
    if (!name) return this.listSearchDistributor = [];
    this.listSearchStore = this.listStore.filter(x => x.Name.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }
  autocompleteDistributor(name) {
    if (!name) return this.listSearchDistributor = [];
    this.listSearchDistributor = this.listDistributor.filter(x => x.Name.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }
  cancel = () => {
  }
  save = () => {
    this.model.CompanyId = 32;
    this.model.Price = +this.model.Price;
    this.model.TargetMarketId = +this.model.TargetMarketId;
    this.model.CategoryId = +this.model.CategoryId;
    this.model.Type = 1;
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
    if(this.fileImg){
      this.selectImage(this.fileImg).subscribe(res => { }, (err) => { }, () => {
        let ProductMedias = [
          {
            "MediaURL": this.imageLinkUpload,
            "Type": 3,
            "Status": 1
          }
        ];
        this.model.ProductMedias = ProductMedias;
        this.productionService.createProduct(this.model).subscribe(res => {
          this.dialogRef.close();
        })
      });
    }
    else{
      let ProductMedias = [
        {
          "MediaURL": "https://nbc-files.s3.ap-southeast-1.amazonaws.com/4-b84dc417-5afb-46ed-a046-8dd7281727cd.jpg",
          "Type": 3,
          "Status": 1
        }
      ];
      this.model.ProductMedias = ProductMedias;
      this.productionService.createProduct(this.model).subscribe(res => {
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
    this.model.Ingradient = this.chips.join();
    this.chipInput = '';
  }

  removeChip(index) {
    this.chips.splice(index, 1);
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
