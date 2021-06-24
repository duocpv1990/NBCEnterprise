import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DistributorService } from 'src/app/services/distributor.service';

@Component({
  selector: 'app-delete-distributor',
  templateUrl: './delete-distributor.component.html',
  styleUrls: ['./delete-distributor.component.scss']
})
export class DeleteDistributorComponent implements OnInit {
  model: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteDistributorComponent>,
    private distributorService: DistributorService

  ) { }

  ngOnInit(): void {
    this.model = this.data;
  }
  handleEvent(ev) {
    if (ev.value === 'cancel') {
      this.dialogRef.close();
    }
    if (ev.value === 'confirm') {
      this.deleteFunction();
    }
  }
  deleteFunction() {
    if (this.model.check === 'delete-all') {
      this.model.item.forEach(x => {
        this.distributorService.deleteDistributor(x.DistributorId).subscribe(res => {
          this.dialogRef.close();
        })
      });
    }
    else {
      this.distributorService.deleteDistributor(this.model.item.DistributorId).subscribe(res => {
        this.dialogRef.close();
      })
    }
  }

}
