import { PatientEditorService } from './../services/patient-editor.service';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SelectItem, SharedModule } from 'primeng/api';
import { take } from 'rxjs';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { PatientNewQuickComponent } from '../patient-new-quick/patient-new-quick.component';
import { SpeedDialModule } from 'primeng/speeddial';
import { GridCardComponent } from '../../../features/patient/grid-card/grid-card.component';
import { WideCardComponent } from '../../../features/patient/wide-card/wide-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';

@Component({
    selector: 'gita-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
    standalone: true,
    imports: [
        DataViewModule,
        SharedModule,
        DropdownModule,
        InputTextModule,
        RouterLink,
        FontAwesomeModule,
        WideCardComponent,
        GridCardComponent,
        SpeedDialModule,
        PatientNewQuickComponent,
    ],
})
export class PatientsComponent implements OnInit, AfterViewInit {

  products!: { id: number, name: string }[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  @ViewChildren('griddy') griddy!: QueryList<ElementRef>;

  contentRef?: HTMLElement;

  faPlus = faPlus;

  constructor(protected patientEditorService: PatientEditorService) { }

  ngOnInit() {
    setTimeout(() => this.products = Array(100).fill(0).map((_, i) => ({ id: i, name: `Patient ${i}` })), 0);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

  }

  onLayoutToggle(event: { 'layout': 'grid' | 'list' }) {
    if (event.layout === 'grid') {
      this.contentRef?.classList.add('grid-container');
    } else {
      this.contentRef?.classList.remove('grid-container');
    }
  }

  onSortChange(event: { value: string }) {
    this.sortField = event.value;
  }

  ngAfterViewInit() {
    this.griddy.changes.pipe(take(1)).subscribe(() => {
      this.contentRef = this.griddy.first.nativeElement.parentNode; // TODO: story 2: ng-template container styling
      this.contentRef?.classList.add('grid-container');
    });
  }

  showEditor(show: boolean) {
    this.patientEditorService.showEditor(show);
  }
}
