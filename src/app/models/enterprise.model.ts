import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class EnterPriseModel {


    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Mã doanh nghiệp',
                type: 'text',
                data: [],
                condition: 'CompanyCode'
            },
            {
                Text: 'Tên đăng ký',
                type: 'text',
                data: [],
                condition: 'Name'
            },
            {
                Text: 'Trạng thái',
                type: 'select',
                data: [],
                condition: 'Status'
            },
            {
                Text: 'Tìm kiếm',
                type: 'button',
                condition: 'stt'
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
                id: 'CompanyCode',
                name: 'Mã doanh nghiệp',
                width: 200,
                type: 'text',
            },

            {
                id: 'GLN',
                name: 'Mã địa điểm toàn cầu',
                width: 200,
                type: 'text',
            },
            {
                id: 'Name',
                name: 'Tên đăng ký',
                width: 200,
                type: 'text',
            },
            {
                id: 'CertificateNumber',
                name: 'Giấy tờ',
                width: 200,
                type: 'text',
            },
            {
                id: 'StatusString',
                name: 'Trạng thái',
                width: 200,
                type: 'text',
                color: '#26A700'
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
            }, {
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
                id: 'Name',
                label: 'Tên doanh nghiệp',
                name: 'Name',
                type: 'text'
            },
            {
                id: 'CompanyCode',
                label: 'Mã doanh nghiệp',
                name: 'CompanyCode',
                type: 'text'
            },
            {
                id: 'GLN',
                label: 'Mã địa điểm toàn cầu GLN',
                name: 'GLN',
                type: 'text'
            },
            {
                id: 'TaxCode',
                label: 'Mã số thuế',
                name: 'TaxCode',
                type: 'text'
            },
            {
                id: 'NationId',
                label: 'Quốc gia',
                name: 'Nation',
                type: '',
                ward: 'Nation'
            },
            {
                id: 'ProvinceId',
                label: 'Thành phố/Tỉnh',
                name: 'city',
                type: '',
                ward: 'City'
            },
            {
                id: 'DistrictId',
                label: 'Quận/Huyện',
                name: 'district',
                type: '',
                ward: 'District'
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
            {
                id: 'addnew',
                label: 'GIẤY CHỨNG CHỈ, CHỨNG NHẬN',
                name: 'addnew',
                type: 'button'
            },
        ];
    }


}