import { NgModule } from '@angular/core';

//primeNG
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

/*Este módulo solo exporta los demás módulos de nuestro framework UI*/

@NgModule({
  declarations: [],

  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,

  ],
})
export class PrimeNGModule { }
