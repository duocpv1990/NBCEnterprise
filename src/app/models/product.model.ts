import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
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
                id: 'checkbox',
                name: '',
                width: 100,
                type: 'checkbox',
            },

            {
                id: 'image',
                name: 'Ảnh',
                width: 200,
                type: 'image'
            },
            {
                id: 'productName',
                name: 'Sản phẩm',
                width: 200,
                type: 'text',
            },
            {
                id: 'barcode',
                name: 'Mã vạch',
                width: 200,
                type: 'text',
            },

            {
                id: 'contractPackage',
                name: 'Gói hợp đồng',
                width: 200,
                type: 'text',
            },
            {
                id: 'owner',
                name: 'Công ty sở hữu',
                width: 200,
                type: 'text',
            },
            {
                id: 'authorization',
                name: 'Quyền quản lý',
                width: 200,
                type: 'object',
            },
            {
                id: 'status',
                name: 'Trạng thái',
                width: 200,
                type: 'text',
            },
            {
                id: 'infoStatus',
                name: 'Trạng thái thông tin',
                width: 200,
                type: 'text',
            },
            {
                id: 'scanCount',
                name: 'Lượt quét',
                width: 200,
                type: 'text',
            },

        ];
    }

    public get btnActice(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: 'Thêm mới',
                type: 'create',
                icon: ''
            },
            // {
            //     class: 'btn-create',
            //     text: 'Cập nhật',
            //     type: 'update',
            //     icon: ''
            // },
            {
                class: 'btn-delete',
                text: 'Xoá sản phẩm',
                type: 'delete',
                icon: ''
            },
            {
                class: 'btn-export',
                text: 'Export',
                type: 'export',
                icon: ''
            }
        ];
    }

    public get create(): Array<CreateModel> {
        return [
            {
                id: 'barcode',
                label: 'Mã vạch sản phẩm',
                name: 'barcode',
                type: 'text'
            },
            {
                id: 'productName',
                label: 'Tên sản phẩm',
                name: 'productName',
                type: 'text'
            },
            {
                id: 'price',
                label: 'Giá',
                name: 'price',
                type: 'text'
            },
            {
                id: 'category',
                label: 'Danh mục',
                name: 'category',
                type: 'text'
            },
            {
                id: 'productDetail',
                label: 'Chi tiết sản phẩm',
                name: 'productDetail',
                type: 'text'
            },
            {
                id: 'companyInfo',
                label: 'Thông tin công ty',
                name: 'companyInfo',
                type: 'text'
            },
            {
                id: 'distributor',
                label: 'Nhà phân phối',
                name: 'distributor',
                type: 'text'
            },
            {
                id: 'shop',
                label: 'Điểm bán',
                name: 'shop',
                type: 'text'
            },

            {
                id: 'avatar',
                label: 'Ảnh đại diện',
                name: 'avatar',
                type: 'img'
            }
        ];
    }

}