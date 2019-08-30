import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Material section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import {Ressources} from './app.constants';

import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // Material
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    Ressources
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
