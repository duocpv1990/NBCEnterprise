import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root',
})
export class EnterpriseService {
   
    constructor(
       private http: HttpClient
    ) {

    }
    getCompanyDetail(companyId) {
        return this.http.get(`api/company/detail?companyId=${companyId}`).pipe(map((res: any) => res.payload));
    }
    getListCompany(companyCode, companyName, status, pageNumber, pageSize) {
        return this.http.get(`api/company?companyCode=${companyCode}&name=${companyName}&status=${status}&pageNumber=${pageNumber}&pageSize=${pageSize}`).pipe(map((res: any) => res.payload));
    }
    getCompanyCertificate(companyId){
        return this.http.get(`api/company/certificate?companyId=${companyId}`).pipe(map((res: any) => res.payload));
    }
    createCompany(data) {
        return this.http.post('api/company', data).pipe(map((res: any) => res.payload));
    }
    createCompanyMedia(data){
        return this.http.post('api/company/media', data).pipe(map((res: any) => res.payload));
    }
    CreateCertificateCompany(data){
        return this.http.post('api/company/certificate', data).pipe(map((res: any) => res.payload));
    }
    
    editCompany(companyId, data) {
        return this.http.put(`api/company?companyId=${companyId}`, data).pipe(map((res: any) => res));
    }
    deleteCompany(companyId) {
        return this.http.delete(`api/company?companyId=${companyId}`).pipe(map((res: any) => res));
    }
}
