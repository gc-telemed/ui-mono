import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'gita-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss'],
})
export class GridCardComponent {
  @Input() patient!: number;

  @ViewChild('container', { static: true }) contentRef!: ElementRef<HTMLElement>;
}
