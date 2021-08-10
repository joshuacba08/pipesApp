import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VentasModule } from './ventas/ventas.module';

import { AppComponent } from './app.component';

// Módulo personalizado
import { SharedModule } from './shared/shared.module'
import { AppRouterModule } from './app-router.module';

;




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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
