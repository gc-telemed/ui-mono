import { Component, OnInit } from '@angular/core';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
    selector: 'gita-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss'],
    standalone: true,
    imports: [SpeedDialModule]
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
