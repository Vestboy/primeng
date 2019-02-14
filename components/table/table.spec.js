"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var table_1 = require("./table");
var animations_1 = require("@angular/platform-browser/animations");
var core_1 = require("@angular/core");
var paginator_1 = require("../paginator/paginator");
var dropdown_1 = require("../dropdown/dropdown");
var forms_1 = require("@angular/forms");
var shared_1 = require("../common/shared");
var TestBasicTableComponent = /** @class */ (function () {
    function TestBasicTableComponent() {
        this.cols = [
            { field: 'brand', header: 'Brand' },
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'color', header: 'Color' }
        ];
        this.cars = [
            { "brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff" },
            { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
            { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
            { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
            { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34" },
            { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
            { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
            { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34" },
            { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
            { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
        ];
    }
    TestBasicTableComponent.prototype.customSort = function (event) {
        event.data.sort(function (data1, data2) {
            var value1 = data1[event.field];
            var value2 = data2[event.field];
            var result = null;
            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
                result = value1.localeCompare(value2);
            else
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            return (event.order * result);
        });
    };
    TestBasicTableComponent = __decorate([
        core_1.Component({
            template: "\n    <p-table class=\"basicTable\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\">\n        <tr>\n            <th>Vin</th>\n            <th>Year</th>\n            <th>Brand</th>\n            <th>Color</th>\n        </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-car>\n            <tr>\n                <td>{{car.vin}}</td>\n                <td>{{car.year}}</td>\n                <td>{{car.brand}}</td>\n                <td>{{car.color}}</td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"footer\" let-columns>\n            <tr>\n                <td>Vin</td>\n                <td>Year</td>\n                <td>Brand</td>\n                <td>Color</td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <div style=\"text-align: left\">\n                Always Bet On Prime!\n            </div>\n        </ng-template>\n    </p-table>\n\n    <p-table class=\"filterTable\" #dt [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            <div style=\"text-align: right\">        \n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                <input type=\"text\" class=\"globalFilter\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n            <tr>\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                    <input *ngSwitchCase=\"'brand'\" class=\"brandFilter\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <p-table class=\"sortTable\" [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" class=\"sortableColumn\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr class=\"sort\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <p-table class=\"basicSelectionTable\" [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\"  dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\n            <tr class=\"selectableRow\" [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <p-table class=\"radioSelectionTable\" [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width: 3em\"></th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td>\n                    <p-tableRadioButton class=\"radioRow\" [value]=\"rowData\"></p-tableRadioButton>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <p-table class=\"checkboxSelectionTable\" [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th>\n                    <p-tableHeaderCheckbox class=\"headerCheckbox\"></p-tableHeaderCheckbox>\n                </th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td>\n                    <p-tableCheckbox class=\"rowCheckbox\" [value]=\"rowData\"></p-tableCheckbox>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n    "
        })
    ], TestBasicTableComponent);
    return TestBasicTableComponent;
}());
describe('Table', function () {
    var table;
    var filterTable;
    var sortTable;
    var basicSelectionTable;
    var radioSelectionTable;
    var checkboxSelectionTable;
    var testComponent;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [
                animations_1.NoopAnimationsModule,
                forms_1.FormsModule,
                shared_1.SharedModule
            ],
            declarations: [
                table_1.Table,
                table_1.SortableColumn,
                table_1.SelectableRow,
                table_1.RowToggler,
                table_1.ContextMenuRow,
                table_1.ResizableColumn,
                table_1.ReorderableColumn,
                table_1.EditableColumn,
                table_1.CellEditor,
                table_1.TableBody,
                table_1.ScrollableView,
                table_1.SortIcon,
                table_1.TableRadioButton,
                table_1.TableCheckbox,
                table_1.TableHeaderCheckbox,
                table_1.ReorderableRowHandle,
                table_1.ReorderableRow,
                table_1.SelectableRowDblClick,
                paginator_1.Paginator,
                dropdown_1.Dropdown,
                TestBasicTableComponent,
            ]
        });
        fixture = testing_1.TestBed.createComponent(TestBasicTableComponent);
        testComponent = fixture.componentInstance;
        table = fixture.debugElement.children[0].componentInstance;
        filterTable = fixture.debugElement.children[1].componentInstance;
        sortTable = fixture.debugElement.children[2].componentInstance;
        basicSelectionTable = fixture.debugElement.children[3].componentInstance;
        radioSelectionTable = fixture.debugElement.children[4].componentInstance;
        checkboxSelectionTable = fixture.debugElement.children[5].componentInstance;
    });
    it('should display by default', function () {
        fixture.detectChanges();
        var tableEl = fixture.debugElement.query(platform_browser_1.By.css('div'));
        expect(tableEl.nativeElement).toBeTruthy();
    });
    it('should display 10 rows', function () {
        fixture.detectChanges();
        var tableEl = fixture.debugElement.query(platform_browser_1.By.css('div'));
        var bodyRows = tableEl.query(platform_browser_1.By.css('.ui-table-tbody')).queryAll(platform_browser_1.By.css('tr'));
        expect(bodyRows.length).toEqual(10);
    });
    it('should use sections', function () {
        fixture.detectChanges();
        expect(table.captionTemplate).toBeTruthy();
        expect(table.footerTemplate).toBeTruthy();
        expect(table.summaryTemplate).toBeTruthy();
    });
    it('should use 2 paginator', function () {
        fixture.detectChanges();
        table.paginator = true;
        table.rows = 5;
        table.paginatorPosition = "both";
        fixture.detectChanges();
        var paginatorCount = fixture.debugElement.queryAll(platform_browser_1.By.css("p-paginator"));
        expect(paginatorCount.length).toEqual(2);
    });
    it('should use paginator and list 5 elements', function () {
        fixture.detectChanges();
        table.paginator = true;
        table.rows = 5;
        fixture.detectChanges();
        var tableEl = fixture.debugElement.query(platform_browser_1.By.css('div'));
        var bodyRows = tableEl.query(platform_browser_1.By.css('.ui-table-tbody')).queryAll(platform_browser_1.By.css('tr'));
        expect(bodyRows.length).toEqual(5);
        var pageTwoEl = fixture.debugElement.query(platform_browser_1.By.css("p-paginator")).query(platform_browser_1.By.css(".ui-paginator-pages")).children[1];
        pageTwoEl.nativeElement.click();
        fixture.detectChanges();
        expect(table.first).toEqual(5);
        expect(bodyRows.length).toEqual(5);
    });
    it('should use custom filter and show 2 items', testing_1.fakeAsync(function () {
        fixture.detectChanges();
        var brandFilter = fixture.debugElement.query(platform_browser_1.By.css(".brandFilter"));
        brandFilter.nativeElement.value = "v";
        brandFilter.nativeElement.dispatchEvent(new Event("input"));
        testing_1.tick(300);
        fixture.detectChanges();
        var tableEl = fixture.debugElement.query(platform_browser_1.By.css(".filterTable"));
        var bodyRows = tableEl.query(platform_browser_1.By.css('.ui-table-tbody')).queryAll(platform_browser_1.By.css('tr'));
        expect(bodyRows.length).toEqual(2);
    }));
    it('should use global filter and show 1 items', testing_1.fakeAsync(function () {
        fixture.detectChanges();
        var globalFilter = fixture.debugElement.query(platform_browser_1.By.css(".globalFilter"));
        globalFilter.nativeElement.value = "dsad231ff";
        globalFilter.nativeElement.dispatchEvent(new Event("input"));
        testing_1.tick(300);
        fixture.detectChanges();
        var tableEl = fixture.debugElement.query(platform_browser_1.By.css(".filterTable"));
        var bodyRows = tableEl.query(platform_browser_1.By.css('.ui-table-tbody')).queryAll(platform_browser_1.By.css('tr'));
        expect(bodyRows.length).toEqual(1);
    }));
    it('should use globalFilterFields and show 0 items', testing_1.fakeAsync(function () {
        fixture.detectChanges();
        filterTable.globalFilterFields = ['year', 'color', 'brand'];
        fixture.detectChanges();
        var globalFilter = fixture.debugElement.query(platform_browser_1.By.css(".globalFilter"));
        globalFilter.nativeElement.value = "dsad231ff";
        globalFilter.nativeElement.dispatchEvent(new Event("input"));
        testing_1.tick(300);
        fixture.detectChanges();
        var tableEl = fixture.debugElement.query(platform_browser_1.By.css(".filterTable"));
        var bodyRows = tableEl.query(platform_browser_1.By.css('.ui-table-tbody')).queryAll(platform_browser_1.By.css('tr'));
        expect(bodyRows.length).toEqual(0);
    }));
    it('should use basic sort', function () {
        fixture.detectChanges();
        var brandSortEl = fixture.debugElement.query(platform_browser_1.By.css(".sortableColumn"));
        brandSortEl.nativeElement.click();
        fixture.detectChanges();
        var firstEl = fixture.debugElement.query(platform_browser_1.By.css(".sortTable")).query(platform_browser_1.By.css('.ui-table-tbody')).query(platform_browser_1.By.css('td'));
        expect(firstEl.nativeElement.outerText).toEqual("Audi");
    });
    it('should use multiple sort', testing_1.fakeAsync(function () {
        sortTable.sortMode = "multiple";
        fixture.detectChanges();
        var yearSortEl = fixture.debugElement.queryAll(platform_browser_1.By.css(".sortableColumn"))[1];
        var colorSortEl = fixture.debugElement.queryAll(platform_browser_1.By.css(".sortableColumn"))[3];
        colorSortEl.nativeElement.click();
        fixture.detectChanges();
        var firstEl = fixture.debugElement.query(platform_browser_1.By.css(".sortTable")).query(platform_browser_1.By.css('.ui-table-tbody')).query(platform_browser_1.By.css('tr'));
        expect(firstEl.children[3].nativeElement.outerText).toEqual("Black");
        expect(firstEl.children[2].nativeElement.outerText).toEqual("2011");
        sortTable.multiSortMeta.push({ field: "year", order: 1 });
        sortTable.sortMultiple();
        testing_1.tick(300);
        fixture.detectChanges();
        var firstRow = fixture.debugElement.query(platform_browser_1.By.css(".sortTable")).query(platform_browser_1.By.css('.ui-table-tbody')).query(platform_browser_1.By.css('tr'));
        expect(firstRow.children[2].nativeElement.outerText).toEqual("2000");
    }));
    it('should use custom sort', function () {
        sortTable.customSort = true;
        sortTable.sortFunction.subscribe(function (event) { return testComponent.customSort(event); });
        fixture.detectChanges();
        var brandSortEl = fixture.debugElement.query(platform_browser_1.By.css(".sortableColumn"));
        brandSortEl.nativeElement.click();
        fixture.detectChanges();
        var firstEl = fixture.debugElement.query(platform_browser_1.By.css(".sortTable")).query(platform_browser_1.By.css('.ui-table-tbody')).query(platform_browser_1.By.css('td'));
        expect(firstEl.nativeElement.outerText).toEqual("Audi");
    });
    it('should select single item and unselect when another item select and self click', function () {
        fixture.detectChanges();
        var selectableRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".selectableRow"));
        var vwEl = selectableRows[0];
        vwEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection.brand).toEqual("VW");
        expect(vwEl.nativeElement.className).toContain('ui-state-highlight');
        var audiEl = selectableRows[1];
        audiEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection.brand).toEqual("Audi");
        expect(audiEl.nativeElement.className).toContain('ui-state-highlight');
        audiEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection).toBeFalsy();
        expect(audiEl.nativeElement.className).not.toContain('ui-state-highlight');
    });
    it('should select single item and unselect when another item select and self click without dataKey', function () {
        fixture.detectChanges();
        basicSelectionTable.dataKey = null;
        fixture.detectChanges();
        var selectableRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".selectableRow"));
        var vwEl = selectableRows[0];
        vwEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection.brand).toEqual("VW");
        expect(vwEl.nativeElement.className).toContain('ui-state-highlight');
        var audiEl = selectableRows[1];
        audiEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection.brand).toEqual("Audi");
        expect(audiEl.nativeElement.className).toContain('ui-state-highlight');
        audiEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection).toBeFalsy();
        expect(audiEl.nativeElement.className).not.toContain('ui-state-highlight');
    });
    it('should select multiple items and unselect with self click', function () {
        fixture.detectChanges();
        basicSelectionTable.selectionMode = "multiple";
        fixture.detectChanges();
        var selectableRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".selectableRow"));
        var vwEl = selectableRows[0];
        vwEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection[0].brand).toEqual("VW");
        expect(vwEl.nativeElement.className).toContain('ui-state-highlight');
        var audiEl = selectableRows[1];
        audiEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection[1].brand).toEqual("Audi");
        expect(basicSelectionTable.selection.length).toEqual(2);
        expect(audiEl.nativeElement.className).toContain('ui-state-highlight');
        audiEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(1);
        expect(audiEl.nativeElement.className).not.toContain('ui-state-highlight');
    });
    it('should select single item with metaKey selection', function () {
        fixture.detectChanges();
        basicSelectionTable.metaKeySelection = true;
        fixture.detectChanges();
        var selectableRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".selectableRow"));
        var vwEl = selectableRows[0];
        vwEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection.brand).toEqual("VW");
        expect(vwEl.nativeElement.className).toContain('ui-state-highlight');
        var event = document.createEvent('CustomEvent');
        event.metaKey = true;
        event.ctrlKey = true;
        event.initEvent('click');
        var audiEl = selectableRows[1];
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.brand).toEqual("Audi");
        expect(audiEl.nativeElement.className).toContain('ui-state-highlight');
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection).toBeFalsy();
        expect(audiEl.nativeElement.className).not.toContain('ui-state-highlight');
    });
    it('should select multiple items with metaKey selection', function () {
        fixture.detectChanges();
        basicSelectionTable.stateKey = "vin";
        basicSelectionTable.selectionMode = "multiple";
        basicSelectionTable.metaKeySelection = true;
        fixture.detectChanges();
        var selectableRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".selectableRow"));
        var vwEl = selectableRows[0];
        vwEl.nativeElement.click();
        fixture.detectChanges();
        expect(basicSelectionTable.selection[0].brand).toEqual("VW");
        expect(vwEl.nativeElement.className).toContain('ui-state-highlight');
        var event = document.createEvent('CustomEvent');
        event.metaKey = true;
        event.ctrlKey = true;
        event.initEvent('click');
        var audiEl = selectableRows[1];
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection[1].brand).toEqual("Audi");
        expect(basicSelectionTable.selection.length).toEqual(2);
        expect(audiEl.nativeElement.className).toContain('ui-state-highlight');
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(1);
        expect(audiEl.nativeElement.className).not.toContain('ui-state-highlight');
    });
    it('should select range  with shiftKey selection', function () {
        fixture.detectChanges();
        basicSelectionTable.selectionMode = "multiple";
        basicSelectionTable.metaKeySelection = true;
        fixture.detectChanges();
        var event = document.createEvent('CustomEvent');
        event.shiftKey = true;
        event.initEvent('click');
        var selectableRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".selectableRow"));
        var audiEl = selectableRows[1];
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.rangeRowIndex).toEqual(basicSelectionTable.anchorRowIndex);
        expect(basicSelectionTable.selection[0].brand).toEqual("Audi");
        expect(audiEl.nativeElement.className).toContain('ui-state-highlight');
        var mercedesEl = selectableRows[4];
        mercedesEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(4);
        var fordEl = selectableRows[8];
        fordEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(8);
        var vwEl = selectableRows[0];
        vwEl.nativeElement.dispatchEvent(event);
        vwEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(2);
    });
    it('should select range  with shiftKey selection without dataKey', function () {
        fixture.detectChanges();
        basicSelectionTable.dataKey = null;
        basicSelectionTable.selectionMode = "multiple";
        basicSelectionTable.metaKeySelection = true;
        fixture.detectChanges();
        var event = document.createEvent('CustomEvent');
        event.shiftKey = true;
        event.initEvent('click');
        var selectableRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".selectableRow"));
        var audiEl = selectableRows[1];
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        audiEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.rangeRowIndex).toEqual(basicSelectionTable.anchorRowIndex);
        expect(basicSelectionTable.selection[0].brand).toEqual("Audi");
        expect(audiEl.nativeElement.className).toContain('ui-state-highlight');
        var mercedesEl = selectableRows[4];
        mercedesEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(4);
        var fordEl = selectableRows[8];
        fordEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(8);
        var vwEl = selectableRows[0];
        vwEl.nativeElement.dispatchEvent(event);
        vwEl.nativeElement.dispatchEvent(event);
        fixture.detectChanges();
        expect(basicSelectionTable.selection.length).toEqual(2);
    });
    it('should select with radioButton', function () {
        fixture.detectChanges();
        radioSelectionTable.stateKey = "vin";
        fixture.detectChanges();
        var radioRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".radioRow"));
        expect(radioRows.length).toEqual(10);
        var vwRadioEl = radioRows[0].query(platform_browser_1.By.css("div"));
        var bmwRadioEl = radioRows[3].query(platform_browser_1.By.css("div"));
        vwRadioEl.query(platform_browser_1.By.css("input")).nativeElement.dispatchEvent(new Event("focus"));
        vwRadioEl.nativeElement.click();
        fixture.detectChanges();
        expect(vwRadioEl.query(platform_browser_1.By.css(".ui-radiobutton-box")).nativeElement.className).toContain("ui-state-focus");
        vwRadioEl.query(platform_browser_1.By.css("input")).nativeElement.dispatchEvent(new Event("blur"));
        fixture.detectChanges();
        expect(vwRadioEl.query(platform_browser_1.By.css(".ui-radiobutton-box")).nativeElement.className).not.toContain("ui-state-focus");
        expect(radioSelectionTable.selection.brand).toEqual("VW");
        bmwRadioEl.nativeElement.click();
        fixture.detectChanges();
        expect(radioSelectionTable.selection.brand).toEqual("BMW");
        bmwRadioEl.nativeElement.click();
        fixture.detectChanges();
        expect(radioSelectionTable.selection).toBeFalsy();
    });
    it('should select with checkbox and unselect when self click', function () {
        fixture.detectChanges();
        checkboxSelectionTable.stateKey = "vin";
        fixture.detectChanges();
        var checkboxRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".rowCheckbox"));
        expect(checkboxRows.length).toEqual(10);
        var vwCheckboxEl = checkboxRows[0].query(platform_browser_1.By.css("div"));
        vwCheckboxEl.query(platform_browser_1.By.css("input")).nativeElement.dispatchEvent(new Event("focus"));
        vwCheckboxEl.nativeElement.click();
        fixture.detectChanges();
        expect(vwCheckboxEl.query(platform_browser_1.By.css(".ui-chkbox-box")).nativeElement.className).toContain("ui-state-focus");
        vwCheckboxEl.query(platform_browser_1.By.css("input")).nativeElement.dispatchEvent(new Event("blur"));
        fixture.detectChanges();
        expect(vwCheckboxEl.query(platform_browser_1.By.css(".ui-chkbox-box")).nativeElement.className).not.toContain("ui-state-focus");
        expect(checkboxSelectionTable.selection[0].brand).toEqual("VW");
        var audiCheckboxEl = checkboxRows[1].query(platform_browser_1.By.css("div"));
        audiCheckboxEl.nativeElement.click();
        fixture.detectChanges();
        expect(checkboxSelectionTable.selection.length).toEqual(2);
        audiCheckboxEl.nativeElement.click();
        vwCheckboxEl.nativeElement.click();
        fixture.detectChanges();
        expect(checkboxSelectionTable.selection.length).toEqual(0);
    });
    it('should select all items and unselect all item with header checkbox', function () {
        fixture.detectChanges();
        checkboxSelectionTable.stateKey = "vin";
        fixture.detectChanges();
        var checkboxRows = fixture.debugElement.queryAll(platform_browser_1.By.css(".rowCheckbox"));
        var vwCheckboxEl = checkboxRows[0].query(platform_browser_1.By.css("div"));
        var headerCheckbox = fixture.debugElement.query(platform_browser_1.By.css(".headerCheckbox")).query(platform_browser_1.By.css("div"));
        headerCheckbox.query(platform_browser_1.By.css("input")).nativeElement.dispatchEvent(new Event("focus"));
        fixture.detectChanges();
        expect(headerCheckbox.query(platform_browser_1.By.css(".ui-chkbox-box")).nativeElement.className).toContain("ui-state-focus");
        headerCheckbox.nativeElement.click();
        headerCheckbox.query(platform_browser_1.By.css("input")).nativeElement.dispatchEvent(new Event("blur"));
        fixture.detectChanges();
        expect(headerCheckbox.query(platform_browser_1.By.css(".ui-chkbox-box")).nativeElement.className).not.toContain("ui-state-focus");
        expect(checkboxSelectionTable.selection.length).toEqual(10);
        vwCheckboxEl.nativeElement.click();
        fixture.detectChanges();
        expect(checkboxSelectionTable.selection.length).toEqual(9);
        headerCheckbox.nativeElement.click();
        fixture.detectChanges();
        headerCheckbox.nativeElement.click();
        fixture.detectChanges();
        expect(checkboxSelectionTable.selection).toEqual([]);
    });
    it('should headerCheckbox changing by filtering', testing_1.fakeAsync(function () {
        fixture.detectChanges();
        checkboxSelectionTable.stateKey = "vin";
        fixture.detectChanges();
        var headerCheckbox = fixture.debugElement.query(platform_browser_1.By.css(".headerCheckbox")).query(platform_browser_1.By.css("div"));
        headerCheckbox.nativeElement.click();
        fixture.detectChanges();
        checkboxSelectionTable.filter("v", "brand", "contains");
        testing_1.tick(300);
        fixture.detectChanges();
        var rowCheckboxs = fixture.debugElement.queryAll(platform_browser_1.By.css(".rowCheckbox"));
        expect(rowCheckboxs.length).toEqual(2);
        expect(fixture.debugElement.query(platform_browser_1.By.css(".headerCheckbox")).componentInstance.isAllFilteredValuesChecked()).toEqual(true);
        rowCheckboxs[0].query(platform_browser_1.By.css("div")).nativeElement.click();
        fixture.detectChanges();
        checkboxSelectionTable.filter("v", "brand", "contains");
        testing_1.tick(300);
        fixture.detectChanges();
        expect(fixture.debugElement.query(platform_browser_1.By.css(".headerCheckbox")).componentInstance.isAllFilteredValuesChecked()).toEqual(false);
    }));
});
//# sourceMappingURL=table.spec.js.map