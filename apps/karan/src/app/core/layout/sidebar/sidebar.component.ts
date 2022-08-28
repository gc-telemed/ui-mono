import { LayoutModel } from './../state/layout.model';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { globalRouteItems } from '../../models/global-routes.model';
import { selectLayout } from '../state/layout.selectors';
import { BreakpointsService } from './../../services/breakpoints.service';
import { collapseSidebar, expandSidebar, hideSidebar } from './../state/layout.actions';

@Component({
  selector: 'gita-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<true>();
  protected layout$: Observable<LayoutModel> = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  protected items!: MenuItem[];
  protected isSidebarExpanded$ = this.layout$.pipe(map(l => l.sidebar === 'shown'));

  protected logoPath = '/assets/img/logo-1024.png'

  protected collapser: () => void = () => this.store.dispatch(collapseSidebar());
  protected expander: () => void = () => this.store.dispatch(expandSidebar());

  constructor(private store: Store, private breakpoints: BreakpointsService) { }

  ngOnInit() {
    this.items = globalRouteItems;
    this.breakpoints.smallPortrait$().pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(isSmallPortrait => isSmallPortrait
      ? this.store.dispatch(hideSidebar())
      : this.store.dispatch(collapseSidebar())
    );
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}