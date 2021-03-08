import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {


  //i18Select 
  nombre: string = 'Fernando';
  genero: string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural

  clientes: string[] = ['mario', 'andres', 'Josue', 'Iñaki', 'Marcelo'];
  clientesMapa = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    '=3': 'tenemos 3 clientes esperando',
    'other': 'Tenemos # clientes esperando'
  }

  cambiarPersona() {
    this.nombre = 'Marina';
    this.genero = 'femenino';
  }

  agregarPersona() {
    this.clientes.push('Juan');
  }

  eliminarPersona() {
    this.clientes.pop();
  }

  //key value piepe

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Esteli, Nicaragua'
  }

  //json Pipe

  heroes = [
    {
      nombre: 'superman',
      vuela: false
    },
    {
      nombre: 'batman',
      vuela: true
    },
    {
      nombre: 'antman',
      vuela: false
    },
    {
      nombre: 'Robin',
      vuela: true
    }
  ]

  //async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de la promesa!');
    }, 3500)
  });

}
