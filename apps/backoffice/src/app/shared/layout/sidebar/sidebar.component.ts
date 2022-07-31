import { selectLayout } from './../../../core/store/layout/layout.selectors';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { collapseSidebar, expandSidebar } from '../../../core/store/layout/layout.actions';

@Component({
  selector: 'gita-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {

  protected items!: MenuItem[];
  onDestroy$ = new Subject<true>();

  layout$ = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  protected onSidebarCollapse() {
    this.store.dispatch(collapseSidebar());
  }

  protected onSidebarExpand() {
    this.store.dispatch(expandSidebar());
  }

  constructor(private store: Store) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi-pw pi-home',
      },
      {
        label: 'Schedule',
        icon: 'pi-fw pi-calendar-plus',
      },
      {
        label: 'Patients',
        icon: 'pi-fw pi-user-plus',
      },
      {
        label: 'Billing',
        icon: 'pi-fw pi-book',
      },
      {
        label: 'Inventory',
        icon: 'pi-fw pi-qrcode',
      },
      {
        label: 'Treatments',
        icon: 'pi-fw pi-link',
      },
      {
        label: 'Statistics',
        icon: 'pi-fw pi-chart-line',
      }
    ];
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}