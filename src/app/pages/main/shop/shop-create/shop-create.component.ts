import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EnterPriseModel } from 'src/app/models/enterprise.model';
import { ShopModel } from 'src/app/models/shop.model';
import { WardService } from 'src/app/services/city-district.service';
import { StoreService } from 'src/app/services/store.service';
import { EnterpriseCreateComponent } from '../../enterprise/enterprise-create/enterprise-create.component';

@Component({
  selector: 'app-shop-create',
  templateUrl: './shop-create.component.html',
  styleUrls: ['./shop-create.component.scss']
})
export class ShopCreateComponent implements OnInit {

  conFig = new ShopModel;
  dataModel: any = {};
  option = {
      title: 'Thêm mới điểm bán',
      type: 'create'
  };

  arrayButton = [{
      class: 'btn-cancel',
      text: 'Hủy bỏ'
  },
  {
      class: 'btn-save',
      text: 'Lưu'
  }]
  constructor(
    private dialogRef: MatDialogRef<ShopCreateComponent>,
    private wardService: WardService,
    private shopService: StoreService
  ) { }
  listCreate = [];

  ngOnInit(): void {
      this.listCreate = this.conFig.create;
      this.listCreate[1].data = [
        {
          value: 916,
          name: "Việt Nam"
        }
      ]
  }
  handleSelectChange(ev){
    if(ev.check === "Nation"){
      this.wardService.getAllCity(+ev.value).subscribe(res => {
         this.listCreate[2].data = res.map(x => {
           return {
             value: x.ProvinceId,
             name: x.Name
           }
         })
      })
    }
    if(ev.check === 'City'){
      this.wardService.getDistrict(+ev.value).subscribe(res => {
        this.listCreate[3].data = res.map(x => {
          return {
            value: x.DistrictId,
            name: x.Name
          }
        })
      })
    }
    
  }
  

  handleCallbackEvent = (value) => {
      console.log(value);
      
      switch (value.class) {
          case 'btn-cancel':
              this.cancel();
              break;
          case 'btn-save':
              this.dataModel = value.data;
              this.dataModel.NationId = +value.data.NationId;
              this.dataModel.ProvinceId = +value.data.ProvinceId;
              this.dataModel.DistrictId = +value.data.DistrictId;
              this.dataModel.Type = 1;
              this.dataModel.Status = 1;
              this.dataModel.StoreMedias = value.listMedia;
              this.save(this.dataModel)
              break;
          default:
              break;
      }
      this.dialogRef.close();
  }

  cancel = () => {
  }

  save = (model) => {
      this.shopService.createStore(model).subscribe(res => {
          
      })
  }


}
