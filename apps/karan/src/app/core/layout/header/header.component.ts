import { HeaderRoutesService } from './../../services/header-routes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem, SharedModule } from 'primeng/api';
import { map, Subject, takeUntil } from 'rxjs';
import { selectLayout } from '../store/layout.selectors';
import { SidebarVizService } from './../../services/sidebar-viz.service';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { HeaderBasicModule } from '../../../../../../../libs/ui/src/lib/layout/header-basic/header-basic.module';

@Component({
    selector: 'gita-header',
    templateUrl: './header.component.html',
    styles: [
        `
    :host ::ng-deep {  
      .p-menubar {
        @apply bg-white;
        height: 62px;
      }
      .p-menuitem {
        @apply text-emerald-600;
      }
    }
    `
    ],
    standalone: true,
    imports: [HeaderBasicModule, MenubarModule, SharedModule, RouterLink]
})
export class HeaderComponent implements OnInit, OnDestroy {

  onDestroy$ = new Subject<true>();

  layout$ = this.store.select(selectLayout).pipe(takeUntil(this.onDestroy$));

  isSidebarShown$ = this.layout$.pipe(map(layout => layout.sidebar === 'shown'));

  authPref = "RK";

  prodPref = "D";

  headerNavItems!: MenuItem[];

  protected collapser: () => void = this.sidebarViz.collapser;
  protected expander: () => void = this.sidebarViz.expander;

  constructor(private store: Store, private sidebarViz: SidebarVizService, private headerRoutes: HeaderRoutesService) { }

  ngOnInit() {
    this.headerNavItems = this.headerRoutes.headerNavItems;
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
} 
