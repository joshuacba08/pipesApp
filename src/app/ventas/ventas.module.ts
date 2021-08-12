import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenadosComponent } from './pages/ordenados/ordenados.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenadosPipe } from './pipes/ordenados.pipe';




@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadosComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenadosPipe
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenadosComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,

  ]
})
export class VentasModule { }
