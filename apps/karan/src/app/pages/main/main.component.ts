import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../core/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../core/layout/header/header.component';
import { SidebarComponent } from '../../core/layout/sidebar/sidebar.component';

@Component({
    selector: 'gita-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: true,
    imports: [
        SidebarComponent,
        HeaderComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class MainComponent implements OnInit {

  floatItems!: MenuItem[];

  ngOnInit() {
    this.floatItems = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          console.log({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          console.log({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          console.log({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      }
    ];
  }
}
