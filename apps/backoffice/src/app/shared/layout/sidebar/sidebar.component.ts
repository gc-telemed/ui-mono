import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'gita-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  items!: MenuItem[];

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
        label: 'Inventory',
        icon: 'pi-fw pi-qrcode',
      },
      {
        label: 'Treatments',
        icon: 'pi-fw pi-book',
      },
      {
        label: 'Statistics',
        icon: 'pi-fw pi-chart-line',
      }
    ];
  }
}