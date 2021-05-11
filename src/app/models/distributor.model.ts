import { CollumsModel } from "./base/collums.model";
import { FilterModel } from "./base/filter.model";

export class DistributorModel {


    public get filter(): Array<FilterModel> {
        return [
            {
                Text: 'Mã doanh nghiệp',
                type: 'text',
                data: [],
                condition: 'code'
            },
            {
                Text: 'Thành phố',
                type: 'select',
                data: [],
                condition: 'city'
            },
            {
                Text: '',
                type: 'search',
                condition: "production"
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
                id: 'image',
                name: 'Ảnh',
                width: 200,
                type: 'image',
            },

            {
                id: 'distributor',
                name: 'Nhà phân phối',
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
                id: 'code',
                name: 'Mã số thuế',
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

}