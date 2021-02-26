import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { VentasModule } from './ventas/ventas.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
//rutas
import { AppRoutingModule } from './app-routing.module';




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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
