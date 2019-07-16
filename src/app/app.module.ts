import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';

import { MatSidenavModule, MatIconModule, MatToolbarModule, MatListModule, MatButtonModule } from '@angular/material';

import { environment } from '../environments/environment';

import { AidsListModule } from './modules/aids-list/aids-list.module';
import { AidsDetailModule } from './modules/aids-detail/aids-detail.module';
import { AidsPresentationModule } from './modules/aids-presentation/aids-presentation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AidsListModule,
    AidsDetailModule,
    AidsPresentationModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
