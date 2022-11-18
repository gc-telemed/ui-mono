import { TreatmentUpdate } from './../model/treatment.model';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { faCopy, faPlusCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, RowSelectedEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { TreatmentApiService } from '../services/treatment-api.service';
import { TreatmentEditorService } from '../services/treatment-editor.service';

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
  public rowData$!: Observable<TreatmentUpdate[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    protected editorService: TreatmentEditorService,
    private apiService: TreatmentApiService) { }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.apiService.getPaged();
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

  showEditor(show: boolean) {
    this.editorService.showEditor(show);
  }
}
