import { Component } from '@angular/core';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SidebarComponent } from './shared/layout/sidebar/sidebar.component';


@Component({
    selector: 'gita-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        SidebarComponent,
        HeaderComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class AppComponent { }
