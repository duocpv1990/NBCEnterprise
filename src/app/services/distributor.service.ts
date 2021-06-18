import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root',
})
export class DistributorService {
   
    constructor(
       private http: HttpClient
    ) {

    }
    getDistributorDetail() {
        return this.http.get(`api/distributor/detail`).pipe(map((res: any) => res.payload));
    }
    getListDistributor(name, provinceId, pageNumber, pageSize) {
        return this.http.get(`api/distributor?name=${name}&provinceId=${provinceId}&pageNumber=${pageNumber}&pageSize=${pageSize}`).pipe(map((res: any) => res.payload));
    }
    createDistributor(data) {
        return this.http.post('api/distributor', data).pipe(map((res: any) => res.payload));
    }
    editDistributor(distributorId, data) {
        return this.http.put(`api/distributor?distributorId=${distributorId}`, data).pipe(map((res: any) => res));
    }
    deleteDistributor(distributorId) {
        return this.http.delete(`api/distributorId?distributorId=${distributorId}`).pipe(map((res: any) => res));
    }
}
