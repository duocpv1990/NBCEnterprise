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
                Text: 'Tìm kiếm',
                type: 'button',
                condition: 'fullText'
            }];
    }


    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'checkbox',
                name: '',
                width: 75,
                type: 'checkbox',
            },

            {
                id: 'MediaURL',
                name: 'Ảnh',
                width: 100,
                type: 'image'
            },
            {
                id: 'Name',
                name: 'Sản phẩm',
                width: 150,
                type: 'text',
            },
            {
                id: 'ProductCode',
                name: 'Mã vạch',
                width: 150,
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
                id: 'Status',
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
                id: 'ScanNumber',
                name: 'Lượt quét',
                width: 200,
                type: 'text',
            },
            {
                id: 'RatingNumber',
                name: 'Lượt đánh giá',
                width: 200,
                type: 'text',
            },
            {
                id: 'Price',
                name: 'Giá',
                width: 100,
                type: 'text',
            },
            {
                id: 'noun',
                name: 'Hành động',
                width: 200,
                type: 'setting',
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
                label: 'Mã số sản phẩm toàn cầu(GTIN) (*)',
                name: 'barcode',
                type: 'text'
            },
            {
                id: 'Name',
                label: 'Tên sản phẩm (*)',
                name: 'productName',
                type: 'text'
            },
            {
                id: 'Price',
                label: 'Giá niêm yết (*)',
                name: 'price',
                type: 'text'
            },
            {
                id: 'category',
                label: 'Ngành hàng (*)',
                name: 'category',
                type: 'select'
            },
            {
                id: 'Description',
                label: 'Mô tả sản phẩm',
                name: 'productDetail',
                type: 'text'
            },
            {
                id: 'companyInfo',
                label: 'Nhãn hiệu',
                name: 'companyInfo',
                type: 'text'
            },
            {
                id: 'DistributorName',
                label: 'Nhà phân phối (*)',
                name: 'DistributorName',
                type: 'autocomplete'
            },
            {
                id: 'StoreName',
                label: 'Điểm bán',
                name: 'StoreName',
                type: 'autocomplete'
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