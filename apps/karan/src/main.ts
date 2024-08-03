import { enableProdMode, importProvidersFrom } from '@angular/core';


import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes, withEnabledBlockingInitialNavigation } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { API_URL } from './app/core/api/api.config';
import { PagesModule } from './app/pages/pages.module';
import { environment } from './environments/environment';

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
        importProvidersFrom(BrowserModule, PagesModule, StoreModule.forRoot({}, {}), EffectsModule.forRoot([]), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production , connectInZone: true})),
        { provide: API_URL, useValue: environment.apiUrl },
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes, withEnabledBlockingInitialNavigation()),
    ]
})
  .catch((err) => console.error(err));
