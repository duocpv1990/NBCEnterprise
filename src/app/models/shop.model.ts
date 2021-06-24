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
                condition: 'Name'
            },
            {
                Text: 'Tỉnh thành',
                type: 'select',
                data: [],
                condition: 'Province'
            },
            {
                Text: 'Hình thức',
                type: 'select',
                data: [],
                condition: 'Type'
            },
            {
                Text: 'Tìm kiếm',
                type: 'button',
                condition: 'Name'
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
                id: 'Name',
                name: 'Tên cửa hàng',
                width: 200,
                type: 'text',
            },
            {
                id: 'AddressDetail',
                name: 'Địa chỉ',
                width: 200,
                type: 'text',
            },
            {
                id: 'District',
                name: 'Khu vực',
                width: 200,
                type: 'text',
            },
            {
                id: 'PhoneNumber',
                name: 'Điện thoại',
                width: 200,
                type: 'text',
            },
            {
                id: 'TypeString',
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
                id: 'UpdatedOn',
                name: 'Cập nhật',
                width: 200,
                type: 'date',
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
                id: 'Name',
                label: 'Tên điểm bán',
                name: 'distributorName',
                type: 'text',
                required: true,
            },
            {
                id: 'Type',
                label: 'Hình thức',
                name: 'type',
                type: 'select',
                required: true,
            },
            {
                id: 'NationId',
                label: 'Quốc gia',
                name: 'NationId',
                type: '',
                ward: "Nation",
                required: true,
            },
            {
                id: 'ProvinceId',
                label: 'Thành phố/Tỉnh',
                name: 'ProvinceId',
                type: '',
                ward: "City",
                required: true,
            },
            {
                id: 'DistrictId',
                label: 'Quận/Huyện',
                name: 'DistrictId',
                type: '',
                ward: "District",
                required: true,
            },
            {
                id: 'AddressDetail',
                label: 'Địa chỉ',
                name: 'address',
                type: 'text'
            },
            {
                id: 'PhoneNumber',
                label: 'Số điện thoại',
                name: 'phone',
                type: 'text'
            },
            {
                id: 'Email',
                label: 'Email',
                name: 'email',
                type: 'text'
            },            
            {
                id: 'Website',
                label: 'Website',
                name: 'website',
                type: 'text'
            },
            {
                id: 'avatar',
                label: 'Ảnh đại diện',
                name: 'avatar',
                type: 'img',
                required: true,
            },
            {
                id: 'background',
                label: 'Ảnh nền',
                name: 'background',
                type: 'img',
                required: true,
            },
        ];
    }

}