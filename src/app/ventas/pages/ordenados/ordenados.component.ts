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
  orderBy: string = '';
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
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color:Color.azul,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color:Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color:Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color:Color.verde,
    },
  ]

  cambiar() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden( valor:string ) {
    this.orderBy = valor;
  }

}
