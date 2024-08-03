import { Component, OnInit } from '@angular/core';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
    selector: 'gita-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    standalone: true,
    imports: [SpeedDialModule],
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
