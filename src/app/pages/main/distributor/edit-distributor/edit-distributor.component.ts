import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { DistributorModel } from 'src/app/models/distributor.model';
import { WardService } from 'src/app/services/city-district.service';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-edit-distributor',
  templateUrl: './edit-distributor.component.html',
  styleUrls: ['./edit-distributor.component.scss']
})
export class EditDistributorComponent extends BaseUploadComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public s3Service: S3FileService,
    private dialogRef: MatDialogRef<EditDistributorComponent>,
    private distributorService: DistributorService,
    private wardService: WardService
) { super(s3Service) }
conFig = new DistributorModel;
dataModel: any = {};
option = {
    title: 'THÔNG TIN NHÀ PHÂN PHỐI',
    type: 'edit',
    check: 'distributor'
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
    this.getDetailCompany();

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
            this.listCreate[5].data = province;

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
            this.listCreate[6].data = district;
        })
    }
}

getDetailCompany() {
    this.distributorService.getDistributorDetail(this.data.DistributorId).subscribe(res => {
      console.log(res);
      
      this.dataModel = res;
      this.dataModel.listMedia = res.DistributorMedias;
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
             this.listCreate[3].data = nationList;
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
              this.listCreate[4].data = cityList;
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
                  this.listCreate[5].data = districtList;
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
            DistributorId: value.data.DistributorId,
            MediaURL: value.data.MediaURL,
            Type: 1,
            Status: 1
        }
        this.distributorService.createImgDistributor(fileAvatar).subscribe(res => { });
        this.selectImage(value.data.FileBackground).subscribe(res => { }, (err) => { }, () => {
            let fileBackground = {
                DistributorId: value.data.DistributorId,
                MediaURL: this.imageLinkUpload,
                Type: 2,
                Status: 1
            }
            this.distributorService.createImgDistributor(fileBackground).subscribe(res => { });
        })
    }
    if (value.data.FileAvatar && !value.data.FileBackground) {
        let fileBackground = {
            DistributorId: value.data.DistributorId,
            MediaURL: value.data.BackgroundURL,
            Type: 2,
            Status: 1
        }
        this.distributorService.createImgDistributor(fileBackground).subscribe(res => { });
        this.selectImage(value.data.FileAvatar).subscribe(res => { }, (err) => { }, () => {
            let fileAvatar = {
                DistributorId: value.data.DistributorId,
                MediaURL: this.imageLinkUpload,
                Type: 1,
                Status: 1
            }
            this.distributorService.createImgDistributor(fileAvatar).subscribe(res => { });
        })
    }
    if (value.data.FileAvatar && value.data.FileBackground) {
        this.selectImage(value.data.FileAvatar).subscribe(res => { }, (err) => { }, () => {
            let fileAvatar = {
                DistributorId: value.data.DistributorId,
                MediaURL: this.imageLinkUpload,
                Type: 1,
                Status: 1
            }
            this.distributorService.createImgDistributor(fileAvatar).subscribe(res => { });
            this.selectImage(value.data.FileBackground).subscribe(res => { }, (err) => { }, () => {
                let fileBackground = {
                    DistributorId: value.data.DistributorId,
                    MediaURL: this.imageLinkUpload,
                    Type: 2,
                    Status: 1
                }
                this.distributorService.createImgDistributor(fileBackground).subscribe(res => { });
            })
        });
    }
    else {
        value.data.NationId = +value.data.NationId;
        value.data.ProvinceId = +value.data.ProvinceId;
        value.data.DistrictId = +value.data.DistrictId;
        this.distributorService.editDistributor(value.data.DistributorId, value.data).subscribe(res => {

        })
    }

}


}
