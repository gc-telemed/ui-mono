import { collapseSidebar, expandSidebar } from './../state/layout.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { map, Subject, takeUntil } from 'rxjs';
import { selectLayout } from '../state/layout.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'gita-sidebar',
  templateUrl: './sidebar.component.html'
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
        label: 'Payments',
        icon: 'pi-fw pi-book',
        routerLink: ['payments']
      },
      {
        label: 'Inventory',
        icon: 'pi-fw pi-qrcode',
        routerLink: ['inventory']
      },
      {
        label: 'Catalog',
        icon: 'pi-fw pi-link',
        routerLink: ['catalog']
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