import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// Módulo personalizado
import { SharedModule } from './shared/shared.module'
import { AppRouterModule } from './app-router.module';


// Cambiar el locale de la app
import localEs from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEs );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule,
  ],
  providers: [
    { provide: LOCALE_ID,useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
