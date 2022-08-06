import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { first } from 'rxjs';

@Component({
  selector: 'gita-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit, AfterViewInit {

  products!: { id: number, name: string }[];

  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  @ViewChildren('griddy') griddy!: QueryList<ElementRef>;

  contentRef?: HTMLElement;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    setTimeout(() => this.products = Array(100).fill(0).map((_, i) => ({ id: i, name: `Product ${i}` })), 0);

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = true;
  }

  onLayoutToggle(event: { 'layout': 'grid' | 'list' }) {
    if (event.layout === 'grid') {
      this.contentRef?.classList.add('grid-container');
    } else {
      this.contentRef?.classList.remove('grid-container');
    }
  }

  ngAfterViewInit() {
    this.griddy.changes.pipe(first()).subscribe(() => {
      this.contentRef = this.griddy.first.nativeElement.parentNode; // TODO: story 2: ng-template container styling
      this.contentRef?.classList.add('grid-container');
    });
  }
}
