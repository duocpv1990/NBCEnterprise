import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { Product } from 'src/app/models/product.model';
import { WardService } from 'src/app/services/city-district.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { FormatDateService } from 'src/app/services/format-date.service';
import { ProductionService } from 'src/app/services/production.service';
import { StoreService } from 'src/app/services/store.service';
import { categories, contries } from '../product-add/product-mock';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent extends BaseUploadComponent implements OnInit {
  conFig = new Product();
  dataModel: any = {};
  option = {
    title: 'THÔNG TIN SẢN PHẨM',
    type: 'edit'
  };

  arrayButton = [{
    class: 'btn-cancel',
    text: 'Hủy bỏ'
  },
  {
    class: 'btn-save',
    text: 'Chỉnh sửa'
  }]
  listCreate = [];
  imageUrl: string = 'https://lh4.ggpht.com/-Z_ue0VfOfsk/V4WroOv9Y7I/AAAAAAAAEjc/6mDfRJsMMYoU5q-drqGfQb6oT1Cm4UYOQCLcB/s1600/but%2Bthien%2Blong.jpg';
  chips = [];
  chipInput = '';
  categories = categories;
  contries = contries;
  distributorName: string;
  listStore: any = [];
  listDistributor: any = [];
  listSearchStore: any = [];
  listSearchDistributor: any = [];
  fileImg;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public s3Service: S3FileService,
    private dialogRef: MatDialogRef<ProductUpdateComponent>,
    private productService: ProductionService,
    private storeService: StoreService,
    private distributorService: DistributorService,
    private wardService: WardService,
    private formatDate: FormatDateService
  ) { super(s3Service) }

  ngOnInit(): void {
    this.productService.getProductionDetail(this.data.ProductId).subscribe(res => {
      this.dataModel = res;
      
      console.log(this.dataModel);
      this.dataModel.ExpiredOn = this.formatDate.formatDate(this.dataModel.ExpiredOn, 'YYYY-MM-DD');
      this.dataModel.ManufacturedOn = this.formatDate.formatDate(this.dataModel.ManufacturedOn, 'YYYY-MM-DD');
      this.dataModel.DistributorName = this.dataModel.DistributorProducts[0].Name;
      this.dataModel.StoreName = this.dataModel.DistributorProducts[0].DistributorProductStores[0].Name;
      this.dataModel.MediaURL = this.dataModel.ProductMedias[0].MediaURL;
      this.imageUrl = this.dataModel.MediaURL;

    });
    this.listCreate = this.conFig.create;
    this.storeService.getListStore("", "", 1, 1, 50).subscribe(res => {
      this.listStore = res;
    }),
      this.distributorService.getListDistributor("", "", 1, 50).subscribe(res => {
        this.listDistributor = res;
      });
    this.wardService.getNation().subscribe(res => {
      this.contries = res;
    })
  }

  selectStore(value) {
    this.dataModel.StoreId = value.StoreId;
    this.dataModel.StoreName = value.Name;
    this.dataModel.DistributorProducts[0].DistributorProductStores[0].StoreId = value.StoreId;
    this.listSearchStore = [];
  }
  selectDistributor(value) {
    console.log(value);
    
    this.dataModel.DistributorId = value.DistributorId;
    this.dataModel.DistributorName = value.Name;
    this.dataModel.DistributorProducts[0].DistributorId = value.DistributorId;
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
      this.productService.editProduct(this.dataModel.ProductId, this.dataModel).subscribe(res => {
        this.dialogRef.close();
      });
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
    this.chipInput = '';
  }

  removeChip() {
    this.chips.pop();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
