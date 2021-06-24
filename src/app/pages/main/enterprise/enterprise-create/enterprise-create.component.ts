import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EnterPriseModel } from 'src/app/models/enterprise.model';
import { WardService } from 'src/app/services/city-district.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
    selector: 'app-enterprise-create',
    templateUrl: './enterprise-create.component.html',
    styleUrls: ['./enterprise-create.component.scss']
})
export class EnterpriseCreateComponent implements OnInit {
    conFig = new EnterPriseModel;
    dataModel: any = {};
    option = {
        title: 'Thêm mới doanh nghiệp',
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
        private dialogRef: MatDialogRef<EnterpriseCreateComponent>,
        private wardService: WardService,
        private enterprise: EnterpriseService,
        private loaderService: LoaderService
    ) { }
    listCreate = [];

    ngOnInit() {
        this.listCreate = this.conFig.create;
        this.listCreate[4].data = [{
            name: "Việt Nam",
            value: 916
        }];

    }
    handleSelectChange(ev) {
        if (ev.check === 'Nation') {
            this.wardService.getAllCity(+ev.value).subscribe(res => {
                console.log(res);

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
                this.dataModel.companyMedias = value.listMedia;
                this.dataModel.Status = 1;
                this.dataModel.Type = 1;
                delete this.dataModel.BackgroundURL;
                delete this.dataModel.MediaURL;
                this.save(this.dataModel);
                break;
            default:
                break;
        }
    }

    cancel = () => {
    }

    save = (model) => {
        this.loaderService.show();
        this.enterprise.createCompany(model).subscribe(res => {
            this.loaderService.hide();
            this.dialogRef.close();
        }, (err) => {
            this.loaderService.hide();
        })
    }

}
