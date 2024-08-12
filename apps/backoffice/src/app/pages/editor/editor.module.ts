import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: '', component: EditorComponent,
    data: { title: 'Editor' },
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EditorComponent
    ]
})
export class EditorModule { }
