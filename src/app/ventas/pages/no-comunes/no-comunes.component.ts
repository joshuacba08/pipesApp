import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})


export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Josué';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural


  clientes: string[] = ['María', 'Pedro', 'Juan','Grace'];
  clientesMapa = {
    '=0' : ' no tenemos ningún clinete esperando ',
    '=1' : ' tenemos un cliente esperando ',
    'other' : 'tenemos # clientes esperando' 
  }

  cambiarPersona() {
    this.nombre = 'María',
    this.genero = 'femenino'
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //keyValue Pipe
  persona = {
    nombre: 'Josué',
    edad: 30,
    dirección: 'Córdoba'
  }


  //Json Pipe
  heroe = 
    [
      {
      nombre: "superman",
      vuela: true,
      },
      {
        nombre: "Aquaman",
        vuela: false,
      },
      {
        nombre: "Barman",
        vuela: false,
      }
    ]

    //Async Pipe
    miObservable = interval(1000);  //este observable estará emitiendo valores numéricos

    valorPromesa = new Promise((resolve, reject) => {
      setTimeout( () => {
        resolve( 'Tenemos data de promesa' )
      }, 3500)
      
    });

}
