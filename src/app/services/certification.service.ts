import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ChangeModel } from '../models/auth/change.model';
import { BaseApiService } from './base-api.service';
@Injectable({
  providedIn: 'root',
})
export class CertificationService{
  constructor(private http: HttpClient) {
    
  }

  createCertification = (model) => {
    return this.http.post(`api/certification`, model).pipe(map((res: any) => res.payload));;
  };
 
}
