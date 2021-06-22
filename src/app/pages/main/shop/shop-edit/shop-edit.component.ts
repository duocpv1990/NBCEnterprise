import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { ShopModel } from 'src/app/models/shop.model';
import { WardService } from 'src/app/services/city-district.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
    selector: 'app-shop-edit',
    templateUrl: './shop-edit.component.html',
    styleUrls: ['./shop-edit.component.scss']
})
export class ShopEditComponent extends BaseUploadComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public s3Service: S3FileService,
        private dialogRef: MatDialogRef<ShopEditComponent>,
        private storeService: StoreService,
        private wardService: WardService
    ) {
        super(s3Service);
    }
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
            this.wardService.getNation().subscribe(nation => {
                   let nationList = nation.map(x => {
                       return {
                        name: x.Name,
                        value: x.NationId
                       }
                    
                   })
                   nationList.forEach(x => {
                       if(x.name === this.dataModel.Nation) 
                       return this.dataModel.NationId = x.value
                   });
                   this.listCreate[1].data = nationList;
                   this.wardService.getAllCity(this.dataModel.NationId).subscribe(city => {
                    let cityList = city.map(x => {
                        return {
                         name: x.Name,
                         value: x.ProvinceId
                        }
                     
                    })
                    cityList.forEach(x => {
                        if(x.name === this.dataModel.Province) 
                        return this.dataModel.ProvinceId = x.value
                    });
                    this.listCreate[2].data = cityList;
                    this.wardService.getDistrict(this.dataModel.ProvinceId).subscribe(district => {
                        let districtList = district.map(x => {
                            return {
                             name: x.Name,
                             value: x.DistrictId
                            }
                         
                        })
                        districtList.forEach(x => {
                            if(x.name === this.dataModel.District) 
                            return this.dataModel.DistrictId = x.value
                        });
                        this.listCreate[3].data = districtList;
                    })
                })
            });
        });
    }

    handleCallbackEvent = (value) => {
        switch (value.class) {
            case 'btn-cancel':
                this.cancel();
                break;
            case 'btn-save':
                console.log(value);

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
        if (!value.data.FileAvatar && value.data.FileBackground) {
            let fileAvatar = {
                StoreId: value.data.StoreId,
                MediaURL: value.data.MediaURL,
                Type: 1,
                Status: 1
            }
            this.storeService.createImgStore(fileAvatar).subscribe(res => { });
            this.selectImage(value.data.FileBackground).subscribe(res => { }, (err) => { }, () => {
                let fileBackground = {
                    StoreId: value.data.StoreId,
                    MediaURL: this.imageLinkUpload,
                    Type: 2,
                    Status: 1
                }
                this.storeService.createImgStore(fileBackground).subscribe(res => { });
            })
        }
        if (value.data.FileAvatar && !value.data.FileBackground) {
            let fileBackground = {
                StoreId: value.data.StoreId,
                MediaURL: value.data.BackgroundURL,
                Type: 2,
                Status: 1
            }
            this.storeService.createImgStore(fileBackground).subscribe(res => { });
            this.selectImage(value.data.FileAvatar).subscribe(res => { }, (err) => { }, () => {
                let fileAvatar = {
                    StoreId: value.data.StoreId,
                    MediaURL: this.imageLinkUpload,
                    Type: 1,
                    Status: 1
                }
                this.storeService.createImgStore(fileAvatar).subscribe(res => { });
            })
        }
        if (value.data.FileAvatar && value.data.FileBackground) {
            this.selectImage(value.data.FileAvatar).subscribe(res => { }, (err) => { }, () => {
                let fileAvatar = {
                    StoreId: value.data.StoreId,
                    MediaURL: this.imageLinkUpload,
                    Type: 1,
                    Status: 1
                }
                this.storeService.createImgStore(fileAvatar).subscribe(res => { });
                this.selectImage(value.data.FileBackground).subscribe(res => { }, (err) => { }, () => {
                    let fileBackground = {
                        StoreId: value.data.StoreId,
                        MediaURL: this.imageLinkUpload,
                        Type: 2,
                        Status: 1
                    }
                    this.storeService.createImgStore(fileBackground).subscribe(res => { });
                })
            });
        }
        else {
            value.data.NationId = +value.data.NationId;
            value.data.ProvinceId = +value.data.ProvinceId;
            value.data.DistrictId = +value.data.DistrictId;
            console.log(value.data);
            
            this.storeService.editStore(value.data.StoreId, value.data).subscribe(res => {

            })
        }

    }



}
