import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
//rutas
import { AppRoutingModule } from './app-routing.module';
//cambiar el idioma  local de la app de manera global
import  localeEs  from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localeEs );





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VentasModule,
    SharedModule,
    PrimeNgModule
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}// se pone esto aqui en providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
