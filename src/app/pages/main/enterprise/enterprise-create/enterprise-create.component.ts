import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EnterPriseModel } from 'src/app/models/enterprise.model';
import { WardService } from 'src/app/services/city-district.service';
import { EnterpriseService } from 'src/app/services/enterprise.service';
@Component({
    selector: 'app-enterprise-create',
    templateUrl: './enterprise-create.component.html',
    styleUrls: ['./enterprise-create.component.scss']
})
export class EnterpriseCreateComponent implements OnInit {
    conFig = new EnterPriseModel;
    dataModel = {};
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
        private enterprise: EnterpriseService
    ) { }
    listCreate = [];

    ngOnInit() {
        this.listCreate = this.conFig.create;
        this.listCreate[4].data = [{
            name: "Việt Nam",
            value: 916
        }];
        this.wardService.getAllCity(916).subscribe(res => {
            const province = res.map(x => {
                return {
                    name: x.Name,
                    value: +x.ProvinceId
                }
            })
            this.listCreate[5].data = province;

        })
    }
    handleSelectChange(ev) {
        if(ev.check === 'City'){
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
        switch (value.class) {
            case 'btn-cancel':
                this.cancel();
                break;
            case 'btn-save':
                this.save(value.data)
                break;
            default:
                break;
        }
        this.dialogRef.close();
    }

    cancel = () => {
    }

    save = (value) => {

        this.dataModel = value;
        this.enterprise.createCompany(value).subscribe(res => {
            console.log(this.dataModel);
        })
    }

}
