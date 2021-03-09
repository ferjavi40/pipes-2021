import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//prime
import {MenuItem} from 'primeng/api';
import { RelojServiceService } from '../../ventas/services/reloj-service.service';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  public items: MenuItem [] = [];
  public uhr: Observable < Date >;


  constructor( private _relojService: RelojServiceService) { }

  ngOnInit() {
    
    this.items = [
      {
        label:'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label:'Textos y fechas',
            icon: 'pi pi-book',
            routerLink: '/'
          },
          {
            label:'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label:'No comunes',
            icon: 'pi pi-eye-slash',
            routerLink: 'noComunes'
          }

        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
];


  this.uhr= this._relojService.getCurrentTime();

  }

}
