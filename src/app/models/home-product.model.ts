import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class HomeProduct {


    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Trạng thái',
                type: 'select',
                data: [],
                condition: 'status'
            },
            {
                Text: 'Tình trạng',
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
                id: 'stt',
                name: 'STT',
                width: 100,
                type: 'text',
            },

            {
                id: 'productName',
                name: 'Sản phẩm',
                width: 200,
                type: 'text',
            },
            {
                id: 'gtinCode',
                name: 'Mã GTIN',
                width: 200,
                type: 'text',
            },

            {
                id: 'register',
                name: 'DN đăng ký',
                width: 200,
                type: 'text',
            },
            {
                id: 'status',
                name: 'Trạng thái',
                width: 200,
                type: 'text',
                color: '#26A700'
            },
            {
                id: 'condition',
                name: 'Tình trạng',
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