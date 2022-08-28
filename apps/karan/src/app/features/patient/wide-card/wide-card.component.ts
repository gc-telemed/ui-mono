import { Component, Input } from '@angular/core';

@Component({
  selector: 'gita-wide-card',
  templateUrl: './wide-card.component.html',
  styleUrls: ['./wide-card.component.scss'],
})
export class WideCardComponent {
  @Input() patient!: number;
}
