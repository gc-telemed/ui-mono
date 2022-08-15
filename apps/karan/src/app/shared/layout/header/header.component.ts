import { MenuItem } from 'primeng/api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { selectLayout } from '../state/layout.selectors';
import { Store } from '@ngrx/store';
import { collapseSidebar, expandSidebar } from '../state/layout.actions';

@Component({
  selector: 'gita-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<true>();

  layout$ = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  isSidebarShown$ = this.layout$.pipe(map(layout => layout.sidebar === 'shown'));

  authPref = "RK";

  prodPref = "D";

  headerNavItems!: MenuItem[];

  protected collapser: () => void = () => this.store.dispatch(collapseSidebar());
  protected expander: () => void = () => this.store.dispatch(expandSidebar());

  constructor(private store: Store) { }

  ngOnInit() {
    this.headerNavItems = [
      {
        label: 'Recent',
        routerLink: '/recent',
      },
      {
        label: 'All',
        routerLink: '/all',
      }
    ]
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
} 
