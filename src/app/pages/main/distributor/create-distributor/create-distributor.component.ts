import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DistributorModel } from 'src/app/models/distributor.model';
import { WardService } from 'src/app/services/city-district.service';
import { DistributorService } from 'src/app/services/distributor.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-create-distributor',
  templateUrl: './create-distributor.component.html',
  styleUrls: ['./create-distributor.component.scss']
})
export class CreateDistributorComponent implements OnInit {
  conFig = new DistributorModel;
  dataModel: any = {};
  option = {
    title: 'Thêm mới nhà phân phối',
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
    private dialogRef: MatDialogRef<CreateDistributorComponent>,
    private distributorService: DistributorService,
    private wardService: WardService,
    private loaderService: LoaderService
  ) { }
  listCreate = [];

  ngOnInit(): void {
    this.listCreate = this.conFig.create;
    this.wardService.getNation().subscribe(res => {
      let nation = res.map(x => {
        return {
          name: x.Name,
          value: x.NationId
        }
      });
      this.listCreate[3].data = nation;
    })
  }

  handleSelectChange(ev) {
    if (ev.check === "Nation") {
      this.wardService.getAllCity(+ev.value).subscribe(res => {
        this.listCreate[4].data = res.map(x => {
          return {
            value: x.ProvinceId,
            name: x.Name
          }
        })
      })
    }
    if (ev.check === 'City') {
      this.wardService.getDistrict(+ev.value).subscribe(res => {
        this.listCreate[5].data = res.map(x => {
          return {
            value: x.DistrictId,
            name: x.Name
          }
        })
      })
    }

  }

  handleCallbackEvent = (value) => {
    switch (value.class) {
      case 'btn-cancel':
        this.onFunictionSaveNote();
        break;
      case 'btn-save':
        this.dataModel = value.data;
        this.dataModel.NationId = +value.data.NationId;
        this.dataModel.ProvinceId = +value.data.ProvinceId;
        this.dataModel.DistrictId = +value.data.DistrictId;
        this.dataModel.DistributorMedias = value.listMedia;
        this.dataModel.Status = 1;
        this.dataModel.Type = 1;
        this.dataModel.CompanyId = +value.data.CompanyId;
        delete this.dataModel.BackgroundURL;
        delete this.dataModel.MediaURL;
        this.onFunictionSave(this.dataModel);
        break;
      default:
        break;
    }
  }

  onFunictionSaveNote = () => {
    this.dialogRef.close();
  }
  onFunictionSave = (model) => {
    this.distributorService.createDistributor(model).subscribe(res => {
      this.dialogRef.close();

    },(err) => {
      this.dialogRef.close();
    })
  }


}
