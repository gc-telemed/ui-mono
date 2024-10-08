import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WideCardComponent } from './wide-card/wide-card.component';
import { GridCardComponent } from './grid-card/grid-card.component';

const COMPS = [
  WideCardComponent,
  GridCardComponent
]

@NgModule({
    imports: [CommonModule, ...COMPS],
    exports: [...COMPS]
})
export class PatientModule { }
