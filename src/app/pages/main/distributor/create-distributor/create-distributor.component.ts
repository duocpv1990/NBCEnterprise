import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DistributorModel } from 'src/app/models/distributor.model';

@Component({
  selector: 'app-create-distributor',
  templateUrl: './create-distributor.component.html',
  styleUrls: ['./create-distributor.component.scss']
})
export class CreateDistributorComponent implements OnInit {
  conFig = new DistributorModel;
  dataModel = {};
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
  ) { }
  listCreate = [];

  ngOnInit(): void {
      this.listCreate = this.conFig.create;
  }

  handleCallbackEvent = (value) => {
      switch (value.class) {
          case 'mbf-btn-save-note':
              this.onFunictionSaveNote();
              break;
          case 'mbf-btn-save':
              this.onFunictionSave()
              break;
          default:
              break;
      }
      this.dialogRef.close();
  }

  onFunictionSaveNote = () => {
      console.log(this.dataModel);
  }

  onFunictionSave = () => {
      console.log(this.dataModel);
  }


}
