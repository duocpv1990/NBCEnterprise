import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnterPriseModel } from 'src/app/models/enterprise.model';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-enterprise-edit',
  templateUrl: './enterprise-edit.component.html',
  styleUrls: ['./enterprise-edit.component.scss']
})
export class EnterpriseEditComponent implements OnInit {
 
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EnterpriseEditComponent>,
    private enterpriseService: EnterpriseService
  ) { }
  conFig = new EnterPriseModel;
  dataModel = {};
  option = {
      title: 'THÔNG TIN DOANH NGHIỆP',
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

 async ngOnInit() {
      this.listCreate = this.conFig.create;
      const data = await this.enterpriseService.getCompanyDetail(this.data.CompanyId).toPromise().then();
      this.dataModel = data;
      
  }

  getDetailCompany(){
      this.enterpriseService.getCompanyDetail(this.data.CompanyId).subscribe(res => {
          this.dataModel = res;
      });
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
     this.enterpriseService.editCompany(value.CompanyId, value).subscribe(res => {
         
     })
  }


}
