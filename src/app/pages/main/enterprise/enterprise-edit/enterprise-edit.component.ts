import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaseUploadComponent, S3FileService } from '@consult-indochina/common';
import { EnterPriseModel } from 'src/app/models/enterprise.model';
import { WardService } from 'src/app/services/city-district.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
    selector: 'app-enterprise-edit',
    templateUrl: './enterprise-edit.component.html',
    styleUrls: ['./enterprise-edit.component.scss']
})
export class EnterpriseEditComponent extends BaseUploadComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public s3Service: S3FileService,
        private dialogRef: MatDialogRef<EnterpriseEditComponent>,
        private enterpriseService: EnterpriseService,
        private wardService: WardService
    ) { super(s3Service) }
    conFig = new EnterPriseModel;
    dataModel: any = {};
    option = {
        title: 'THÔNG TIN DOANH NGHIỆP',
        type: 'edit',
        check: 'enterprise'
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
        this.listCreate[4].data = [{
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
        this.enterpriseService.getCompanyDetail(this.data.CompanyId).subscribe(res => {
            this.dataModel = res;
            this.dataModel.listMedia = res.CompanyMedias;
            this.wardService.getAllCity(res.NationId).subscribe(res => {
                const province = res.map(x => {
                    return {
                        name: x.Name,
                        value: +x.ProvinceId
                    }
                })
                this.listCreate[5].data = province;

            });
            this.wardService.getDistrict(res.ProvinceId).subscribe(res => {
                const district = res.map(x => {
                    return {
                        name: x.Name,
                        value: +x.DistrictId
                    }
                })
                this.listCreate[6].data = district;
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
        if (!value.data.FileAvatar && value.data.FileBackground) {
            let fileAvatar = {
                CompanyId: value.data.CompanyId,
                MediaURL: value.data.MediaURL,
                Type: 1,
                Status: 1
            }
            this.enterpriseService.createCompanyMedia(fileAvatar).subscribe(res => { });
            this.selectImage(value.data.FileBackground).subscribe(res => { }, (err) => { }, () => {
                let fileBackground = {
                    CompanyId: value.data.CompanyId,
                    MediaURL: this.imageLinkUpload,
                    Type: 2,
                    Status: 1
                }
                this.enterpriseService.createCompanyMedia(fileBackground).subscribe(res => { });
            })
        }
        if (value.data.FileAvatar && !value.data.FileBackground) {
            let fileBackground = {
                CompanyId: value.data.CompanyId,
                MediaURL: value.data.BackgroundURL,
                Type: 2,
                Status: 1
            }
            this.enterpriseService.createCompanyMedia(fileBackground).subscribe(res => { });
            this.selectImage(value.data.FileAvatar).subscribe(res => { }, (err) => { }, () => {
                let fileAvatar = {
                    CompanyId: value.data.CompanyId,
                    MediaURL: this.imageLinkUpload,
                    Type: 1,
                    Status: 1
                }
                this.enterpriseService.createCompanyMedia(fileAvatar).subscribe(res => { });
            })
        }
        if (value.data.FileAvatar && value.data.FileBackground) {
            this.selectImage(value.data.FileAvatar).subscribe(res => { }, (err) => { }, () => {
                let fileAvatar = {
                    CompanyId: value.data.CompanyId,
                    MediaURL: this.imageLinkUpload,
                    Type: 1,
                    Status: 1
                }
                this.enterpriseService.createCompanyMedia(fileAvatar).subscribe(res => { });
                this.selectImage(value.data.FileBackground).subscribe(res => { }, (err) => { }, () => {
                    let fileBackground = {
                        CompanyId: value.data.CompanyId,
                        MediaURL: this.imageLinkUpload,
                        Type: 2,
                        Status: 1
                    }
                    this.enterpriseService.createCompanyMedia(fileBackground).subscribe(res => { });
                })
            });
        }
        else {
            value.data.NationId = +value.data.NationId;
            value.data.ProvinceId = +value.data.ProvinceId;
            value.data.DistrictId = +value.data.DistrictId;
            this.enterpriseService.editCompany(value.data.CompanyId, value.data).subscribe(res => {

            })
        }

    }


}
