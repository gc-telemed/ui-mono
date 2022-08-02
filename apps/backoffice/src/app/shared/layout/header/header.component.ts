import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, take, takeUntil } from 'rxjs';

import { collapseSidebar, expandSidebar } from '../store/layout/layout.actions';
import { selectLayout } from '../store/layout/layout.selectors';

@Component({
  selector: 'gita-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<true>();

  layout$ = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  constructor(private store: Store) { }

  ngOnInit() {
    this.layout$.subscribe(l => console.log("layout on header init", l.sidebar));
  }

  toggleSidebar() {
    this.layout$.pipe(take(1)).subscribe(
      layout => {
        if (layout.sidebar !== 'shown') {
          this.store.dispatch(expandSidebar());
        } else {
          this.store.dispatch(collapseSidebar());
        }
      }
    );
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
} 