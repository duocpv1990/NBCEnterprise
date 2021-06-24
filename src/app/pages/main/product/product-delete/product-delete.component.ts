import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {
  model: any = {};

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ProductDeleteComponent>,
    private productionService: ProductionService
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
        this.productionService.deleteProduct(x.ProductId).subscribe(res => {
          this.dialogRef.close();
        })
      });
    }
    else {
      this.productionService.deleteProduct(this.data.item.ProductId).subscribe(res => {
        this.dialogRef.close();
      })
    }
  }

}
