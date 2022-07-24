import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';

@Component({
  selector: 'gita-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  dockItems!: MenuItem[];

  private tooltipDefaults: (t: string) => TooltipOptions
    = (tooltipLabel: string) => ({
      tooltipLabel,
      tooltipPosition: 'bottom',
      positionLeft: 10,
      positionTop: 20,
      showDelay: 500,
    });

  private labeler: (l: string) => Pick<MenuItem, 'label' | 'tooltipOptions'>
    = (label: string) => ({
      label,
      tooltipOptions: this.tooltipDefaults(label),
    })

  ngOnInit(): void {
    this.dockItems = [
      {
        ...this.labeler('Composer'),
        icon: '/assets/img/onion-diagram.webp',
      },
      {
        ...this.labeler('Graphs'),
        icon: '/assets/img/cthulhu.png',
      },
      {
        ...this.labeler('Forms'),
        icon: '/assets/img/forms.png',
      },
      {
        ...this.labeler('Charts'),
        icon: '/assets/img/pie.png',
      },
      {
        ...this.labeler('Tables'),
        icon: '/assets/img/datable.png',
      },
      {
        ...this.labeler('Schedules'),
        icon: '/assets/img/temporal.png',
      },
    ];
  }
}
