import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormatDateService } from '../../services/format-date.service';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
    @Input() listFilter: any;
    @Input() data: any;
    @Output() callback = new EventEmitter<any>();
    constructor(
        private serviceDate: FormatDateService
    ) { }

    onChangeValueDate = (valueDate, item) => {
        if (item.type === 'date') {
            item.value = this.serviceDate.formatDate(valueDate, 'MM-DD-YYYY');
        } else {
            item.value = valueDate;
        }
        this.callback.emit(item)
    }

}

@NgModule({
    declarations: [
        FilterComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FilterComponent
    ]
})
export class FilterBaseModule { }