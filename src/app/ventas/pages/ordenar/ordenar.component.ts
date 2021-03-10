import { Component } from '@angular/core';
import { Color, heroesInterface } from '../../interfaces/heroes';




@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  nombre: string = "fernando javier";
  enMayusculas: boolean = true;

  odenarPor: string = '';

  heroes: heroesInterface[] = [
    {
      nombre: 'Batman',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Robin',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'superman',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Duende verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Silver surfer',
      vuela: false,
      color: Color.negro
    }, {
      nombre: 'Deadpool',
      vuela: true,
      color: Color.azul
    },
  ];


  hacerMayusculas() {
    if (this.enMayusculas) {
      this.enMayusculas = false
    } else {
      this.enMayusculas = true;
    }

  }

  cambiarOrden(valor:string) {
    this.odenarPor= valor;
    console.log('este:',valor)
  }


}
