import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnChanges, OnInit, Output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() tableData: any;
    @Input() listActive?: any;
    @Output() callback = new EventEmitter<any>();

    totalPage: number;
    currentPage: number = 1;
    dataSub = [];
    pageSive = 5;
    checkSelectAll;
    showDelete = false;
    listSelectAll: any = [];
    constructor() { }

    ngOnChanges() {
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.currentPage = 1;
        this.onLoadDatePagitor();
        this.data.map(x => x.check === false);
        this.showDelete = false;
        this.checkSelectAll = false;
    }

    ngOnInit() {
        this.totalPage = Math.ceil((this.data.length / this.pageSive));
        this.onLoadDatePagitor();
    }

    selectAll(value) {
        this.checkSelectAll = true;
        this.listSelectAll.length = 0;
        this.data.forEach(x => {
            x.check = value;
        });
        this.data.forEach(x => {
            if (x.check === true) {
                this.listSelectAll.push(x);
            }
        });
        if (this.listSelectAll.length === 0) {
            this.showDelete = false;
        }
        else {
            this.showDelete = true;
        }
        console.log(this.listSelectAll);

    }
    selectItem(item, value, index) {
        this.showDelete = value;
        this.listSelectAll.length = [];
        item.check = value;
        this.data.forEach(x => {
            if (x.check === true) {
                this.listSelectAll.push(x);
            }
        });
        if (this.listSelectAll.length === 0) {
            this.showDelete = false;
            this.checkSelectAll = false;
        }
        if (this.listSelectAll.length !== 0 && this.listSelectAll.length === this.data.length) {
            this.showDelete = true;
            this.checkSelectAll = true;
        }
        if ((this.listSelectAll.length !== 0 && this.listSelectAll.length !== this.data.length)) {
            this.showDelete = true;
            this.checkSelectAll = false;
        }
    }

    nextPage = () => {
        if (this.currentPage + 1 > this.totalPage) return;
        this.currentPage += 1;
        this.onLoadDatePagitor();
    }

    backPage = () => {
        if (this.currentPage - 1 === 0) return;
        this.currentPage -= 1;
        this.onLoadDatePagitor();
    }


    onLoadDatePagitor = () => {
        this.dataSub = this.data.filter((x, ix) => (this.currentPage - 1) * this.pageSive <= ix && ix < this.currentPage * this.pageSive);
    }

    onClickSetting = (item, type) => {
        this.callback.emit({
            item: item,
            type: type
        })
    }

    onClickBtnActive = (i) => {
        if (i.type === 'delete') {
            this.callback.emit({
                type: 'delete-all',
                item: this.listSelectAll,
            })
        }
        if (i.type === 'export') {
            this.callback.emit({
                type: i.type,
                service: i.service
            })
        }
    }

    handleRouteLink = (item) => {
        this.callback.emit({
            type: 'route',
            item: item
        })
    }
    handleClickRow(item) {
        this.callback.emit({
            item: item,
            type: 'edit'
        });
    }
    clickCreate() {
        this.callback.emit({
            type: 'create'
        })
    }
    import() {
        this.callback.emit({
            type: 'import',
        })
    }
}

@NgModule({
    declarations: [
        TableComponent,
    ],
    imports: [
        CommonModule,
        MatMenuModule
    ],
    exports: [
        TableComponent
    ]
})
export class TableBaseModule { }