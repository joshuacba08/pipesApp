import { Component } from '@angular/core';
import { Color, Heroe } from '../../interface/ventas.interface';

@Component({
  selector: 'app-ordenados',
  templateUrl: './ordenados.component.html',
  styles: [
  ]
})
export class OrdenadosComponent  {

  enMayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre:'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color:Color.negro,
    }
  ]

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

}
