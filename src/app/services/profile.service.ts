import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProfileModel } from "../models/profile/profile.model";
import { BaseApiService } from "./base-api.service";

@Injectable({
          providedIn: 'root',
        })
export class ProfileService extends BaseApiService<ProfileModel> {
constructor(http: HttpClient) {
          super(http, 'api/SalesManager/Admin/Account');
}
}
