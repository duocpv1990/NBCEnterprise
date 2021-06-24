import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EnterpriseService } from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-delete-enterprise',
  templateUrl: './delete-enterprise.component.html',
  styleUrls: ['./delete-enterprise.component.scss']
})
export class DeleteEnterpriseComponent implements OnInit {
   model: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DeleteEnterpriseComponent>,
    private enterprise: EnterpriseService
    
  ) { }

  ngOnInit(): void {
    this.model = this.data;
  }
  handleEvent(ev){
    if(ev.value === 'cancel'){
         this.dialogRef.close();
    }
    if(ev.value === 'confirm'){
       this.deleteFunction();
              
    }
  }
  deleteFunction(){
    if(this.model.check === 'delete-all'){
        this.model.item.forEach(x => {
          this.enterprise.deleteCompany(x.CompanyId).subscribe(res => {
            this.dialogRef.close();
          })
        });
    }
    else{
      this.enterprise.deleteCompany(this.model.item.CompanyId).subscribe(res => {
        this.dialogRef.close();
      })
    }
  
  }

}
