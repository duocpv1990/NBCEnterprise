import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProfileModel } from 'src/app/models/profile/profile.model';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { ProfileService } from 'src/app/services/profile.service';
import { ChangePasswordComponent } from '../../dialog/change-password/change-password.component';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  @Input() dataHeaderInfo;
  profile: Observable<ProfileModel>;
  constructor( private local : LocalStorageService,
    private route: Router,
    private profileService: ProfileService,
    private dialog: MatDialog ) { }

  ngOnInit(): void {
   this.getProfile()
    
  }

  btnLogout() {
    this.local.clear();
    this.route.navigate([''])
  }
  getProfile() {
    this.profile = this.profileService.get('').pipe(map((res : any) => {
      return res.data
    }))
    
  }
  changePassword() : void {
    this.dialog.open(ChangePasswordComponent, {
      data: {}
    })
      .afterClosed()
    .subscribe(() => {})
  }

}
