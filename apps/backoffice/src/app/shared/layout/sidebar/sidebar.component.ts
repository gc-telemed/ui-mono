import { selectLayout } from '../store/layout/layout.selectors';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { interval, map, noop, Subject, switchMap, take, takeUntil, takeWhile, tap } from 'rxjs';
import { collapseSidebar, expandSidebar } from '../store/layout/layout.actions';

@Component({
  selector: 'gita-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {

  protected items!: MenuItem[];
  onDestroy$ = new Subject<true>();

  layout$ = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  isSidebarExpanded$ = this.layout$.pipe(map(l => l.sidebar === 'shown'));

  pauseCollapse = false;

  protected onSidebarCollapse() {
    this.pauseCollapse = false;
    this.store.dispatch(collapseSidebar());
  }

  protected onSidebarExpand() {
    this.store.dispatch(expandSidebar());
  }

  private autoCollapse() {

    this.isSidebarExpanded$.pipe(
      takeUntil(this.onDestroy$),
      switchMap((expanded) => interval(5000).pipe(
        takeWhile(() => expanded) // TODO: story 1. leakage and subscriptions
      )),
      tap(() => !this.pauseCollapse ?
        this.onSidebarCollapse() :
        noop()
      )
    ).subscribe();
  }

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
        routerLink: ['schedule']
      },
      {
        label: 'Patients',
        icon: 'pi-fw pi-user-plus',
        routerLink: ['patients']
      },
      {
        label: 'Billing',
        icon: 'pi-fw pi-book',
        routerLink: ['/billing']
      },
      {
        label: 'Inventory',
        icon: 'pi-fw pi-qrcode',
        routerLink: ['/inventory']
      },
      {
        label: 'Treatments',
        icon: 'pi-fw pi-link',
        routerLink: ['/treatments']
      },
      {
        label: 'Statistics',
        icon: 'pi-fw pi-chart-line',
        routerLink: ['/statistics']
      }
    ];

    this.autoCollapse();
  }

  pauseIt() {
    this.pauseCollapse = true;
  }

  unpauseIt() {
    this.pauseCollapse = false;
  }

  toggleSidebar() {
    this.isSidebarExpanded$.pipe(take(1)).subscribe(
      isSidebarExpanded => {
        if (isSidebarExpanded) {
          this.store.dispatch(collapseSidebar());
        } else {
          this.store.dispatch(expandSidebar());
        }
      }
    );
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
}