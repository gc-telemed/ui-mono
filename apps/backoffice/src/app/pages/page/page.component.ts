import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { PageService } from './page.service';


@Component({
  selector: 'gita-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [PageService]
})
export class PageComponent implements OnInit {

  dockItems!: MenuItem[];
  showBottomBar = this.service.isBottomBarShown();

  displayer = false;

  constructor(protected service: PageService, private router: Router) { }

  ngOnInit(): void {
    this.dockItems = this.service.dockItems;
  }

  setBottomBar(show: boolean): void {
    this.service.setBottomBarShown(show);
    if (!show) {
      this.router.navigate([{ outlets: { bottomBar: null } }]); // TODO: story 3: bottom bar, secondary routes on modals
    }
  }
}
