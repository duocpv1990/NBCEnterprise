import { CollumsModel } from "./base/collums.model";
import { CreateModel } from "./base/create.model";
import { FilterModel } from "./base/filter.model";

export class ServicePackage {


    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Tên gói dịch vụ',
                type: 'text',
                data: [],
                condition: 'code'
            },
            {
                Text: 'Người tạo',
                type: 'text',
                data: [],
                condition: 'product-name'
            },

            {
                Text: 'Tình trạng',
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
                width: 100,
                type: 'checkbox',
            },
            {
                id: 'servicePackageName',
                name: 'Tên gói dịch vụ',
                width: 200,
                type: 'text',
            },
            {
                id: 'createPerson',
                name: 'Người tạo',
                width: 200,
                type: 'text',
            },
            {
                id: 'createDate',
                name: 'Ngày tạo',
                width: 200,
                type: 'text',
            },

            {
                id: 'lastEditDate',
                name: 'Ngày sửa đổi cuối cùng',
                width: 200,
                type: 'text',
            },
            {
                id: 'lastEditPerson',
                name: 'Người sửa đổi cuối cùng',
                width: 200,
                type: 'text',
            },
            {
                id: 'condition',
                name: 'Tình trạng',
                width: 200,
                type: 'text',
            },
            {
                id: 'status',
                name: 'Trạng thái',
                width: 200,
                type: 'text',
            },
            {
                id: 'action',
                name: 'Hành động',
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
            {
                class: 'btn-export',
                text: 'Export',
                type: 'export',
                icon: ''
            },
            {
                class: 'btn-delete',
                text: 'Xoá',
                type: 'delete',
                icon: ''
            },

        ];
    }

    public get create(): Array<CreateModel> {
        return [
            {
                id: 'servicePackageName',
                label: 'Tên dịch vụ ',
                name: 'productName',
                type: 'text'
            },
        ];
    }

}