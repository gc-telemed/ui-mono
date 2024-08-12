import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { map, Subject, takeUntil } from 'rxjs';

import { collapseSidebar, expandSidebar } from '../store/layout/layout.actions';
import { selectLayout } from '../store/layout/layout.selectors';
import { HeaderBasicModule } from '../../../../../../../libs/ui/src/lib/layout/header-basic/header-basic.module';

@Component({
    selector: 'gita-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [HeaderBasicModule],
})
export class HeaderComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<true>();

  layout$ = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  isSidebarShown$ = this.layout$.pipe(map(layout => layout.sidebar === 'shown'));

  authPref = "RK";

  prodPref = "OCT";

  headerNavItems!: MenuItem[];

  protected collapser: () => void = () => this.store.dispatch(collapseSidebar());
  protected expander: () => void = () => this.store.dispatch(expandSidebar());

  constructor(private store: Store) { }

  ngOnInit() {
    this.headerNavItems = [
      {
        label: 'Editor',
        routerLink: '/editor',
      },
      {
        label: 'Settings',
        routerLink: '/settings',
      }
    ]
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
} 