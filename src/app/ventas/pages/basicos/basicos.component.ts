import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombre: string = 'josué Oroya';

  date: Date = new Date();

  constructor() { }


}
