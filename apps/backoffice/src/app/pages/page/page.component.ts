import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem, SharedModule } from 'primeng/api';
import { PageService } from './page.service';
import { AsyncPipe } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { SpeedDialModule } from 'primeng/speeddial';
import { DockModule } from 'primeng/dock';


@Component({
    selector: 'gita-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    providers: [PageService],
    standalone: true,
    imports: [DockModule, SharedModule, SpeedDialModule, RouterOutlet, SidebarModule, AsyncPipe]
})
export class PageComponent implements OnInit {

  dockItems!: MenuItem[];
  floatItems!: MenuItem[];
  showBottomBar = this.service.isBottomBarShown();

  displayer = false;

  constructor(protected service: PageService, private router: Router) { }

  ngOnInit(): void {
    this.dockItems = this.service.dockItems;
    this.floatItems = this.service.floatItems;
  }

  setBottomBar(show: boolean): void {
    this.service.setBottomBarShown(show);
    if (!show) {
      this.router.navigate([{ outlets: { bottomBar: null } }]); // TODO: story 3: bottom bar, secondary routes on modals
    }
  }
}
