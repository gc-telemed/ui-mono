import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faEnvelopeOpenText, faPlusCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, RowSelectedEvent, SelectionChangedEvent } from 'ag-grid-community';
import { SpeedDialModule } from 'primeng/speeddial';
import { Subject } from 'rxjs';
import { localeDateFormat } from '../../../core/utils/date';

@Component({
    selector: 'gita-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    standalone: true,
    imports: [AgGridModule, FontAwesomeModule, SpeedDialModule, NgIf],
})
export class IndexComponent implements OnDestroy {
  gridApi!: GridApi;
  private isDestroyed = new Subject<void>();

  selectedOrRowId: false | number = false;

  faPlus = faPlusCircle;
  faEnvelope = faEnvelopeOpenText;
  faClone = faCopy;
  faTrash = faTrash;
  faSearch = faSearch;

  readonly columnDefs: ColDef[] = [
    { field: "id", headerName: "ID", headerTooltip: "Unique ID for the given lead", flex: 1.8, sort: 'desc' },
    { field: "name", flex: 2.5 },
    { field: "phone", flex: 2, },
    { field: "address", flex: 2},
    { field: "totalAmount", flex: 2 },
    { field: "paidAmount", flex: 2 },
    { field: "discount", flex: 2 },
    { field: "reasonForVisit", flex: 3},
    { field: "billingDate", valueFormatter: localeDateFormat, headerName: "Received", headerTooltip: "Date when request was made", filter: "date", flex: 3 },
  ];

  readonly defaultColDef: ColDef = {
    flex: 1,
    minWidth: 50,
    sortable: true,
    resizable: true,
    filter: true,
  };

  rowData!: any; // TODO create model

  constructor(private http: HttpClient) { }

  onGridReady(_params: GridReadyEvent) {
    this.gridApi = _params.api;
  }

  ngOnDestroy() {
    this.isDestroyed.next();
    this.isDestroyed.complete();
  }

  onRowSelected(event: RowSelectedEvent) {
    this.selectedOrRowId = event.node.isSelected() ? event.node.data.id : false;
  }

  onSelectionChanged(evt: SelectionChangedEvent) {
    if (evt.api.getSelectedRows()?.length !== 1) return;
    const selectedOrder = evt.api.getSelectedRows()[0];
    console.log(selectedOrder.id, "selected row id");
  }

  deleteRowSelected() {
    if (this.selectedOrRowId === false) return;
    //TODO delete row
    this.selectedOrRowId = false;
    this.gridApi.deselectAll();
  }
}
