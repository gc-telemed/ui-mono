import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { faCopy, faPlusCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, RowSelectedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'gita-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
})
export class TreatmentComponent {
  readonly columnDefs: ColDef[] = [
    { field: "id", headerName: "ID", headerTooltip: "Unique ID for the given equipment", flex: 1.8, sort: 'desc' },
    { field: "commonName", headerName: "Name", flex: 2.5 },
    { field: "type", flex: 2, },
    { field: "expense", headerName: "Price", flex: 2 },
  ];


  selectedOrRowId: false | number = false;

  faClone = faCopy;
  faPlus = faPlusCircle;
  faTrash = faTrash;
  faSearch = faSearch;

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http
      .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  onRowSelected(event: RowSelectedEvent) {
    this.selectedOrRowId = event.node.isSelected() ? event.node.data.id : false;
  }

  deleteRowSelected() {
    if (this.selectedOrRowId === false) return;
    //TODO delete row
    this.selectedOrRowId = false;
    this.agGrid.api.deselectAll();
  }
}
