import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShopModel } from 'src/app/models/shop.model';
import { WardService } from 'src/app/services/city-district.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ShopEditComponent>,
    private storeService: StoreService,
    private wardService: WardService
) { }
conFig = new ShopModel;
dataModel: any = {};
option = {
    title: 'THÔNG TIN ĐIỂM BÁN',
    type: 'edit',
    check: 'store'
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

ngOnInit() {
    this.listCreate = this.conFig.create;
    this.getDetailStore();
    this.listCreate[1].data = [{
        name: "Việt Nam",
        value: 916
    }];

}
handleSelectChange(ev) {
    if (ev.check === 'Nation') {
        this.wardService.getAllCity(+ev.value).subscribe(res => {
            const province = res.map(x => {
                return {
                    name: x.Name,
                    value: +x.ProvinceId
                }
            })
            this.listCreate[2].data = province;

        })
    }
    if (ev.check === 'City') {
        this.wardService.getDistrict(+ev.value).subscribe(res => {
            const district = res.map(x => {
                return {
                    name: x.Name,
                    value: +x.DistrictId
                }
            })
            this.listCreate[3].data = district;
        })
    }
}

getDetailStore() {
    this.storeService.getStoreDetail(this.data.StoreId).subscribe(res => {
        this.dataModel = res;
        this.dataModel.listMedia = res.StoreMedias;
        this.wardService.getAllCity(916).subscribe(res => {
            let province = res.map(x => {
                return {
                    name: x.Name,
                    value: +x.ProvinceId
                }
            })
            province.forEach(x => {
               if(x.Name === res.Province){
                 this.dataModel.ProvinceId = x.ProvinceId;
               }
            });
            this.listCreate[2].data = province;
            console.log(this.dataModel);
        });
        this.wardService.getDistrict(this.dataModel.ProvinceId).subscribe(res => {
            let district = res.map(x => {
                return {
                    name: x.Name,
                    value: +x.DistrictId
                }
            })
            this.listCreate[3].data = district;
        })

    });
}

handleCallbackEvent = (value) => {
    switch (value.class) {
        case 'btn-cancel':
            this.cancel();
            break;
        case 'btn-save':
             
            this.save(value)
            break;
        default:
            break;
    }
    this.dialogRef.close();
}

cancel = () => {
}

save = (value) => {
    // value.listMedia.forEach(x => {
    //     this.enterpriseService.createCompanyMedia(x).subscribe(res => {

    //     })
    // });
    // this.enterpriseService.editCompany(value.data.CompanyId, value.data).subscribe(res => {

    // })
}



}
