import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-distributor',
  templateUrl: './delete-distributor.component.html',
  styleUrls: ['./delete-distributor.component.scss']
})
export class DeleteDistributorComponent implements OnInit {
  model = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteDistributorComponent>,
    
  ) { }

  ngOnInit(): void {
    this.model = this.data;
  }
  handleEvent(ev){
    console.log(ev);
    if(ev.value === 'cancel'){
         this.dialogRef.close();
    }
    if(ev.value === 'confirm'){
       this.deleteFunction();
    }
  }
  deleteFunction(){
    this.dialogRef.close();
  }

}
