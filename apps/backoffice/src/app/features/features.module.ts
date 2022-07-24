import { BartenderModule } from './bartender/bartender.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const MODS = [
  BartenderModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MODS
  ],
  exports: [
    ...MODS
  ]
})
export class FeaturesModule { }
