import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeModel } from 'src/app/models/auth/change.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { BaseButtonModule } from '../../button/base-button/base-button.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  form = new FormGroup({
    OldPassword: new FormControl(''),
    NewPassword: new FormControl(''),
    ConfirmPassword: new FormControl('')
  }
  )

  err: any;
  success: any;


  // dataBtnSC = {
  //   cssClass: 'btn-sc',
  // };

  // dataBtnCancel = {
  //   cssClass: 'btn-cancel',
  // };

  constructor(
    public dialoRef: MatDialogRef<ChangePasswordComponent>,
    private authenService: AuthenticationService,
    public router: Router,
    private local: LocalStorageService
  ) {}

  ngOnInit() {
  }
  close() {
    this.dialoRef.close();
  }
  change() {
    this.authenService.changePassword(this.form.value).subscribe(
      (res:any) => {
        this.success = res.message + "Bạn cần đăng nhập lại";
      },
      (error) => {
        console.log(error.error.message)
        this.err = error.error.message
      }
    );  
  }

  confirm() {
    this.local.clear();
    this.close();
    this.router.navigate([''])
    
  }
}
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BaseButtonModule],
  exports: [ChangePasswordComponent],
})
export class ChangePasswordModule {}
