import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderBasicModule } from './header-basic/header-basic.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterBasicModule } from './footer-basic/footer-basic.module';
import { SidebarBasicModule } from './sidebar-basic/sidebar-basic.module';

const MODS = [SidebarBasicModule, FooterBasicModule, HeaderBasicModule];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, ...MODS],
  exports: [...MODS],
})
export class LayoutModule { }
