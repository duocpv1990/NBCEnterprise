import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-import-excel',
  templateUrl: './import-excel.component.html',
  styleUrls: ['./import-excel.component.scss']
})
export class ImportExcelComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ImportExcelComponent>) { }

  ngOnInit(): void {
  }
  import(){
    this.dialogRef.close();
  }

}
@NgModule({
  declarations: [
    ImportExcelComponent,
  ],
  imports: [
      CommonModule,
      MatMenuModule,
      MatDialogModule,
      FormsModule
  ],
  exports: [
    ImportExcelComponent
  ]
})
export class ImportExcelModule { }