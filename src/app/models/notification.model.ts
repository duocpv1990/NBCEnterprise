import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class NotificationModel {


    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Tiêu đề       ',
                type: 'text',
                data: [],
                condition: 'title'
            },
            {
                Text: 'Thời gian',
                type: 'date',
                data: [],
                condition: 'time'
            },

            {
                Text: '',
                type: 'search',
                condition: 'stt'
            }
        ];
    }


    public get collums(): Array<CollumsModel> {
        return [
            {
                id: 'time',
                name: 'Thời gian',
                width: 100,
                type: 'text',
            },
            {
                id: 'title',
                name: 'Tiêu đề',
                width: 100,
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
                id: 'register',
                label: 'Tên doanh nghiệp',
                name: 'register',
                type: 'text'
            },
            {
                id: 'code',
                label: 'Mã doanh nghiệp',
                name: 'code',
                type: 'text'
            },
            {
                id: 'global',
                label: 'Mã địa điểm toàn cầu GLN',
                name: 'global',
                type: 'text'
            },
            {
                id: 'taxcode',
                label: 'Mã số thuế',
                name: 'taxcode',
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
            {
                id: 'addnew',
                label: 'Chứng từ, chứng nhận',
                name: 'addnew',
                type: 'button'
            },
        ];
    }


}