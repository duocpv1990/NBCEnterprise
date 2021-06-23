import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class DistributorModel {
    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Mã doanh nghiệp',
                type: 'text',
                data: [],
                condition: 'TaxCode'
            },
            {
                Text: 'Thành phố',
                type: 'select',
                data: [],
                condition: 'city'
            },
            {
                Text: 'Tìm kiếm',
                type: 'search',
                condition: "Name"
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
                name: 'Nhà phân phối',
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
                id: 'TaxCode',
                name: 'Mã số thuế',
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
                id: 'ProductNumber',
                name: 'Sản phẩm',
                width: 100,
                type: 'text',
            },
            {
                id: 'UpdatedOn',
                name: 'Cập nhập',
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
    public get create(): Array<CreateModel> {
        return [
            {
                id: 'CompanyId',
                label: 'Tên doanh nghiệp',
                name: 'Name',
                type: 'autocomplete'
            },
            {
                id: 'Name',
                label: 'Tên nhà phân phối',
                name: 'Name',
                type: 'text'
            },
            // {
            //     id: 'TaxCode',
            //     label: 'Mã doanh nghiệp',
            //     name: 'TaxCode',
            //     type: 'text'
            // },
            {
                id: 'TaxCode',
                label: 'Mã số thuế',
                name: 'TaxCode',
                type: 'text'
            },
            {
                id: 'NationId',
                label: 'Quốc gia',
                name: 'NationId',
                type: '',
                ward: 'Nation'
            },
            {
                id: 'ProvinceId',
                label: 'Thành phố/Tỉnh',
                name: 'city',
                type: '',
                ward: "City"
            },
            {
                id: 'DistrictId',
                label: 'Quận/Huyện',
                name: 'DistrictId',
                type: '',
                ward: 'District'
            },
            {
                id: 'AddressDetail',
                label: 'Địa chỉ',
                name: 'AddressDetail',
                type: 'text'
            },
            {
                id: 'PhoneNumber',
                label: 'Số điện thoại',
                name: 'PhoneNumber',
                type: 'text'
            },
            {
                id: 'Email',
                label: 'Email',
                name: 'Email',
                type: 'text'
            },            
            {
                id: 'Website',
                label: 'Website',
                name: 'Website',
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
