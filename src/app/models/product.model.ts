import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class Product {


    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Mã sản phẩm',
                type: 'text',
                data: [],
                condition: 'code'
            },
            {
                Text: 'Tên sản phẩm',
                type: 'text',
                data: [],
                condition: 'product-name'
            },
            {
                Text: 'Công ty sở hữu',
                type: 'text',
                data: [],
                condition: 'owner'
            },
            {
                Text: 'Gói sản phẩm',
                type: 'text',
                data: [],
                condition: 'package'
            },
            {
                Text: 'Quyền quản lý',
                type: 'select',
                data: [],
                condition: 'authorization'
            },
            {
                Text: 'Trạng thái',
                type: 'select',
                data: [],
                condition: 'status'
            },
            {
                Text: 'Trạng thái thông tin',
                type: 'select',
                data: [],
                condition: 'info-status'
            },
            {
                Text: '',
                type: 'search',
                condition: 'fullText'
            }];
    }


    public get collums(): Array<CollumsModel> {
        return [

            {
                id: 'image',
                name: 'Ảnh',
                width: 200,
                type: 'text'
            },
            {
                id: 'product',
                name: 'Ngày bảo dưỡng gần nhất',
                width: 200,
                type: 'date',
            },
            {
                id: 'barcode',
                name: 'Mã vạch',
                width: 200,
                type: 'date',
            },

            {
                id: 'contract_package',
                name: 'Gói hợp đồng',
                width: 200,
                type: 'text',
            },
            {
                id: 'owner',
                name: 'Công ty sở hữu',
                width: 200,
                type: 'setting',
            },
            {
                id: 'authorization',
                name: 'Quyền quản lý',
                width: 200,
                type: 'setting',
            },
            {
                id: 'status',
                name: 'Trạng thái',
                width: 200,
                type: 'setting',
            },
            {
                id: 'info-status',
                name: 'Trạng thái thông tin',
                width: 200,
                type: 'setting',
            },
            {
                id: 'scan-count',
                name: 'Lượt quét',
                width: 200,
                type: 'setting',
            },

        ];
    }

}