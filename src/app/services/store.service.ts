import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root',
})
export class StoreService {
   
    constructor(
       private http: HttpClient
    ) {

    }
    getStoreDetail(StoreId) {
        return this.http.get(`api/Store/detail?StoreId=${StoreId}`).pipe(map((res: any) => res.payload));
    }
    getListStore(name, provinceId, type, pageNumber, pageSize) {
        return this.http.get(`api/Store?name=${name}&provinceId=${provinceId}&type=${type}&pageNumber=${pageNumber}&pageSize=${pageSize}`).pipe(map((res: any) => res.payload));
    }
    createStore(data) {
        return this.http.post('api/Store', data).pipe(map((res: any) => res.payload));
    }
    editStore(StoreId, data) {
        return this.http.put(`api/Store?StoreId=${StoreId}`, data).pipe(map((res: any) => res));
    }
    deleteStore(StoreId) {
        return this.http.delete(`api/Store?StoreId=${StoreId}`).pipe(map((res: any) => res));
    }
}
