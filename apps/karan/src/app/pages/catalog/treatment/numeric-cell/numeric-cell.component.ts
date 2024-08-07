import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'gita-numeric-cell',
    templateUrl: './numeric-cell.component.html',
    styleUrls: ['./numeric-cell.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule],
})
export class NumericCellComponent implements ICellEditorAngularComp, AfterViewInit {

  @ViewChild('input', { read: ViewContainerRef })
  public input!: ViewContainerRef;

  value!: number;

  agInit(params: ICellEditorParams) {
    console.log("num cell editor params", params);
    this.value = params.value;
  }

  ngAfterViewInit() {
    window.setTimeout(() => {
      this.input.element.nativeElement.focus();
    });
  }

  getValue() {
    return this.value;
  }

}
