import { setViewDay, setViewWeek, setViewMonth, setViewList } from './../../../pages/appointments/store/calendar.actions';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MenuItem } from 'primeng/api';
import { map, Subject, takeUntil } from 'rxjs';
import { selectLayout } from '../store/layout.selectors';
import { SidebarVizService } from './../../services/sidebar-viz.service';

@Component({
  selector: 'gita-header',
  templateUrl: './header.component.html',
  styles: [
    `
    :host ::ng-deep {  
      .p-menubar {
        @apply bg-white
      }
    }
    `
  ]
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

  constructor(private store: Store, private sidebarViz: SidebarVizService) { }

  ngOnInit() {
    this.headerNavItems = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video'
              },

            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'View',
        icon: 'pi pi-fw pi-sliders-h',
        items: [
          {
            label: 'Day',
            icon: 'pi pi-fw pi-align-left',
            command: () => this.store.dispatch(setViewDay())
          },
          {
            label: 'Week',
            icon: 'pi pi-fw pi-align-right',
            command: () => this.store.dispatch(setViewWeek())
          },
          {
            label: 'Month',
            icon: 'pi pi-fw pi-align-center',
            command: () => this.store.dispatch(setViewMonth())
          },
          {
            label: 'List',
            icon: 'pi pi-fw pi-align-justify',
            command: () => this.store.dispatch(setViewList())
          },

        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }
} 
