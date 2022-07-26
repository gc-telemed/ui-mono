import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '@gita/ui';
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
    UiModule
  ],
  exports: [
    ...COMPS
  ]
})
export class LayoutModule { }
