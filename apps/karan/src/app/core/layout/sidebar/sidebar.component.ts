import { globalSettings, globalRouteItems } from '../../models/global-routes.data';
import { SidebarVizService } from './../../services/sidebar-viz.service';
import { LayoutModel } from '../store/layout.model';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { selectLayout } from '../store/layout.selectors';
import { SidebarBasicModule } from '../../../../../../../libs/ui/src/lib/layout/sidebar-basic/sidebar-basic.module';
import { NgIf } from '@angular/common';
import { RxLet } from '@rx-angular/template/let';

@Component({
    selector: 'gita-sidebar',
    templateUrl: './sidebar.component.html',
    standalone: true,
    imports: [RxLet, NgIf, SidebarBasicModule]
})
export class SidebarComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<true>();
  protected layout$: Observable<LayoutModel> = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  protected items!: MenuItem[];
  protected bottom!: MenuItem;
  protected isSidebarExpanded$ = this.layout$.pipe(map(l => l.sidebar === 'shown'));

  protected logoPath = '/assets/img/logo-1024.png'

  protected collapser: () => void = this.sidebarViz.collapser;
  protected expander: () => void = this.sidebarViz.expander;

  constructor(private store: Store, private sidebarViz: SidebarVizService) { }

  ngOnInit() {
    this.items = globalRouteItems;
    this.bottom = globalSettings;
    this.sidebarViz.sizeAwareCollapser();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

}