export class FilterModel {
    Text: string;
    type: string;
    condition?: string;
    value?: string;
    data?: ArrayModel | [];
}
export class ArrayModel {
    value: any;
    text: string;
}