import { UiModule } from '@gita/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LetModule, PushModule } from '@rx-angular/template';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


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
    PushModule,
    UiModule
  ],
  exports: [
    ...COMPS
  ]
})
export class LayoutModule { }
