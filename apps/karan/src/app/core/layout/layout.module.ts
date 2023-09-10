import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RxLet } from '@rx-angular/template/let';
import { layoutReducer } from './store/layout.reducer';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UiModule } from '@gita/ui';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const COMPS = [HeaderComponent, FooterComponent, SidebarComponent];

@NgModule({
  declarations: [...COMPS],
  imports: [
    CommonModule,
    FontAwesomeModule,
    UiModule,
    RxLet,
    MenubarModule,
    InputTextModule,
    StoreModule.forFeature('layout', layoutReducer),
  ],
  exports: [...COMPS]
})
export class LayoutModule { }
