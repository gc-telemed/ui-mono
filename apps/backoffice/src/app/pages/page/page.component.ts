import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TooltipOptions } from 'primeng/tooltip';

type UsedMenuProps = 'label' | 'tooltipOptions' | 'command' | 'routerLink';
@Component({
  selector: 'gita-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  dockItems!: MenuItem[];
  showBottomBar = false;

  private tooltipDefaults: (t: string) => TooltipOptions
    = (tooltipLabel: string) => ({
      tooltipLabel,
      tooltipPosition: 'bottom',
      positionLeft: 10,
      positionTop: 20,
      showDelay: 500,
    });


  private labeler: (l: string) => Pick<MenuItem, UsedMenuProps>
    = (label: string) => ({
      label,
      command: () => this.showBottomBar = !this.showBottomBar,
      tooltipOptions: this.tooltipDefaults(label),
      routerLink: [{ outlets: { bottomBar: [label.toLowerCase()] } }],
    })

  ngOnInit(): void {
    this.dockItems = [
      {
        ...this.labeler('Composer'),
        icon: '/assets/img/onion-diagram.webp',
      },
      {
        ...this.labeler('Graph'),
        icon: '/assets/img/cthulhu.png',
      },
      {
        ...this.labeler('Form'),
        icon: '/assets/img/forms.png',
      },
      {
        ...this.labeler('Chart'),
        icon: '/assets/img/pie.png',
      },
      {
        ...this.labeler('Table'),
        icon: '/assets/img/datable.png',
      },
      {
        ...this.labeler('Schedule'),
        icon: '/assets/img/temporal.png',
      },
    ];
  }
}
