import { selectLayout } from '../store/layout/layout.selectors';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { map, Subject, takeUntil } from 'rxjs';
import { collapseSidebar, expandSidebar } from '../store/layout/layout.actions';

@Component({
  selector: 'gita-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<true>();
  private layout$ = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  protected items!: MenuItem[];
  protected isSidebarExpanded$ = this.layout$.pipe(map(l => l.sidebar === 'shown'));

  protected logoPath = '/assets/img/logo-1024.png'

  protected collapser: () => void = () => this.store.dispatch(collapseSidebar());
  protected expander: () => void = () => this.store.dispatch(expandSidebar());

  constructor(private store: Store) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Overview',
        icon: 'pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'Schedule',
        icon: 'pi-fw pi-calendar-plus',
        routerLink: ['appointments']
      },
      {
        label: 'Patients',
        icon: 'pi-fw pi-user-plus',
        routerLink: ['patients']
      },
      {
        label: 'Billing',
        icon: 'pi-fw pi-book',
        routerLink: ['billing']
      },
      {
        label: 'Inventory',
        icon: 'pi-fw pi-qrcode',
        routerLink: ['inventory']
      },
      {
        label: 'Treatments',
        icon: 'pi-fw pi-link',
        routerLink: ['treatments']
      },
      {
        label: 'Statistics',
        icon: 'pi-fw pi-chart-line',
        routerLink: ['statistics']
      }
    ];

  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}