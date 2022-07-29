import { Component, OnInit } from '@angular/core';
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

  constructor(protected service: PageService) { }

  ngOnInit(): void {
    this.dockItems = this.service.dockItems;
  }

  setBottomBar(show: boolean): void {
    this.service.setBottomBarShown(show);
  }
}
