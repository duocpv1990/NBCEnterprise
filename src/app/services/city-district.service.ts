import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChangeModel } from '../models/auth/change.model';
import { BaseApiService } from './base-api.service';
@Injectable({
  providedIn: 'root',
})
export class WardService {
  constructor(
      private http: HttpClient,
      private httpBE: HttpBackend,
    ) {}

  //  getCities(): Observable<any>{
  //      return this.http.get('assets/json/data.json').pipe(map((res: any) => res));
  //  }
   getNation(){
     return this.http.get('api/nation').pipe(map((res: any) => res.payload));
   }
   getAllCity(nationId){
     return this.http.get(`api/province?nationId=${nationId}`).pipe(map((res: any) => res.payload));
   }
   getDistrict(provinceId){
    return this.http.get(`api/district?provinceId=${provinceId}`).pipe(map((res: any) => res.payload));
   }
}
