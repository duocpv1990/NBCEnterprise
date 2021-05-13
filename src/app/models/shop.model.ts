import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class ShopModel {


    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Tên cửa hàng',
                type: 'text',
                data: [],
                condition: 'name'
            },
            {
                Text: 'Tỉnh thành',
                type: 'select',
                data: [],
                condition: 'province'
            },
            {
                Text: 'Hình thức',
                type: 'select',
                data: [],
                condition: 'form'
            },
            {
                Text: '',
                type: 'search',
                condition: 'fullText'
            }];
    }
   
    public get btnActice(): Array<any> {
        return [
            {
                class: 'btn-create',
                text: 'Thêm mới',
                type: 'create',
                icon: ''
            },
            {
                class: 'btn-delete',
                text: 'Xoá',
                type: 'delete',
                icon: ''
            },            {
                class: 'btn-export',
                text: 'Export',
                type: 'export',
                icon: ''
            }
        ];
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
                id: 'stt',
                name: 'STT',
                width: 100,
                type: 'text',
            },
            {
                id: 'MediaURL',
                name: 'Ảnh',
                width: 100,
                type: 'image',
            },

            {
                id: 'name',
                name: 'Tên cửa hàng',
                width: 200,
                type: 'text',
            },
            {
                id: 'address',
                name: 'Địa chỉ',
                width: 200,
                type: 'text',
            },
            {
                id: 'area',
                name: 'Khu vực',
                width: 200,
                type: 'text',
            },
            {
                id: 'phone',
                name: 'Điện thoại',
                width: 200,
                type: 'text',
            },
            {
                id: 'form',
                name: 'Hình thức',
                width: 200,
                type: 'text',
            },
            {
                id: 'production',
                name: 'Sản phẩm',
                width: 200,
                type: 'text',
            },
            {
                id: 'update',
                name: 'Cập nhập',
                width: 200,
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
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'name',
                label: 'Tên doanh nghiệp',
                name: 'name',
                type: 'text'
            },
            {
                id: 'distributorName',
                label: 'Tên nhà phân phối',
                name: 'distributorName',
                type: 'text'
            },
            {
                id: 'location',
                label: 'Điểm bán',
                name: 'location',
                type: 'text'
            },
            {
                id: 'country',
                label: 'Quốc gia',
                name: 'country',
                type: 'select'
            },
            {
                id: 'city',
                label: 'Thành phố/Tỉnh',
                name: 'city',
                type: 'select'
            },
            {
                id: 'district',
                label: 'Quận/Huyện',
                name: 'district',
                type: 'select'
            },
            {
                id: 'address',
                label: 'Địa chỉ',
                name: 'address',
                type: 'text'
            },
            {
                id: 'phone',
                label: 'Số điện thoại',
                name: 'phone',
                type: 'text'
            },
            {
                id: 'email',
                label: 'Email',
                name: 'email',
                type: 'text'
            },            
            {
                id: 'website',
                label: 'Website',
                name: 'website',
                type: 'text'
            },
            {
                id: 'avatar',
                label: 'Ảnh đại diện',
                name: 'avatar',
                type: 'img'
            },
            {
                id: 'background',
                label: 'Ảnh nền',
                name: 'background',
                type: 'img'
            },
        ];
    }

}