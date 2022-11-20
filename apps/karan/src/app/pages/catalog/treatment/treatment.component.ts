import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { faCopy, faPlusCircle, faSearch, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, RowSelectedEvent } from 'ag-grid-community';
import { filter, merge, Observable, Subscription, tap, fromEvent } from 'rxjs';
import { TreatmentEditorService } from '../services/treatment-editor.service';
import { treatmentListSelectors } from '../store/treatmenet-list/treatment-list.selectors';
import { TreatmentEntity } from './../model/treatment.model';
import { treatmentListActions } from './../store/treatmenet-list/treatment-list.actions';

@Component({
  selector: 'gita-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
})
export class TreatmentComponent implements OnInit, OnDestroy {
  readonly columnDefs: ColDef[] = [
    { field: "id", headerName: "ID", headerTooltip: "Unique ID for the given equipment", flex: 1.8, sort: 'desc' },
    { field: "commonName", headerName: "Name", flex: 2.5 },
    { field: "treatmentType", flex: 2, },
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

  private customPaginationSub!: Subscription;

  // Data that gets displayed in the grid
  public rowData$!: Observable<TreatmentEntity[]>;
  pageSize = this.store.select(treatmentListSelectors.selectTreatmentPageSize);

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(
    protected editorService: TreatmentEditorService,
    private store: Store) { }

  ngOnInit() {
    this.store.dispatch(treatmentListActions.loadTreatments())
  }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.store.select(treatmentListSelectors.selectTreatmentEntities);
    this.initiateCustomPagination();
  }

  initiateCustomPagination() {
    const nextPageButton = document.querySelector('[aria-label="Next Page"]') as HTMLElement;
    const lastPageButton = document.querySelector('[aria-label="Last Page"]') as HTMLElement;

    const nextClick$ = fromEvent(nextPageButton, 'click');
    const lastClick$ = fromEvent(lastPageButton, 'click');
    this.customPaginationSub = merge(nextClick$, lastClick$)
      .pipe(
        filter(() =>
          this.agGrid.api.paginationGetCurrentPage() + 1
          === this.agGrid.api.paginationGetTotalPages()
        ),
        tap(() => console.log("click event pass")),
        tap(() => this.store.dispatch(treatmentListActions.loadTreatments()))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.customPaginationSub.unsubscribe();
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



  onPageChange(event: any) {
    console.log("Page change", event);
  }

  showEditor(show: boolean) {
    this.editorService.showEditor(show);
  }
}
