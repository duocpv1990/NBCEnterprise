import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "./base-api.service";

@Injectable({
  providedIn: 'root',
})
export class ContractService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'api/SalesManager/Admin/ListPolicy');
  }

  getContracts(pageIndex, pageSize): Observable<any> {
    return this.http.get<any>(`api/SalesManager/Admin/ListPolicy?pageindex=${pageIndex}&pagesize=${pageSize}`).pipe(map((res: any) => res.data));
  }

  getContractDetail(id, sellerCode): Observable<any> {
    return this.http.get<any>(`api/SalesManager/Admin/Policy?id=${id}&SellerCode=${sellerCode}`).pipe(map((res: any) => res.data));
  }

}
