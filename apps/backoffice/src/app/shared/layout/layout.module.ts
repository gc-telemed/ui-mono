import { LetModule, PushModule } from '@ngrx/component';
import { SidebarModule } from 'primeng/sidebar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const COMPS = [
  FooterComponent,
  HeaderComponent,
  SidebarComponent
];

@NgModule({
  declarations: [
    ...COMPS
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    PanelMenuModule,
    SidebarModule,
    LetModule,
    PushModule
  ],
  exports: [
    ...COMPS
  ]
})
export class LayoutModule { }
