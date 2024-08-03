import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({ declarations: [], imports: [CommonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class CoreModule { }
