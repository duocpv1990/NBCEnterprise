import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseApiService } from "./base-api.service";

@Injectable({
    providedIn: 'root',
})
export class ProductionService {
   
    constructor(
       private http: HttpClient
    ) {

    }
    getProductionDetail(productId) {
        return this.http.get(`api/product/detail?productId=${productId}`).pipe(map((res: any) => res.payload));
    }
    getListProduct(name, companyName, productCode, type, status, pageNumber, pageSize) {
        return this.http.get(`api/product?name=${name}&companyName=${companyName}&productCode=${productCode}&type=${type}&status=${status}&pageNumber=${pageNumber}&pageSize=${pageSize}`).pipe(map((res: any) => res.payload));
    }
    getProductionCertificate(productId){
        return this.http.get(`api/product/certificate?productId=${productId}`).pipe(map((res: any) => res.payload));
    }
    getTargetMarket(){
        return this.http.get('api/targetmarket').pipe(map((res: any) => res.payload));
    }
    getCategory(){
        return this.http.get('api/category').pipe(map((res: any) => res.payload));
    }
    createProduct(data) {
        return this.http.post('api/product', data).pipe(map((res: any) => res.payload));
    }
    createCertificate(data){
        return this.http.post('api/product/certificate', data).pipe(map((res: any) => res.payload));
    }
    createImgProduct(data){
        return this.http.post("api/product/media", data).pipe(map((res: any) => res.payload));
    }
    editProduct(productId, data) {
        return this.http.put(`api/product?productId=${productId}`, data).pipe(map((res: any) => res));
    }
    deleteProduct(productId) {
        return this.http.delete(`api/product?productId=${productId}`).pipe(map((res: any) => res));
    }
}
