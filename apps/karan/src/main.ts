import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PagesModule } from './app/pages/pages.module';
import { withEnabledBlockingInitialNavigation, provideRouter, Routes } from '@angular/router';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { API_URL } from './app/core/api/api.config';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import("./app/pages/pages.module").then(m => m.PagesModule)
    },
    { path: '**', redirectTo: '' },
];


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, PagesModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })),
        { provide: API_URL, useValue: environment.apiUrl },
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes, withEnabledBlockingInitialNavigation()),
    ]
})
  .catch((err) => console.error(err));
