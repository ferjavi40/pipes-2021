import { Component, OnInit } from '@angular/core';
//prime
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    
    this.items = [
      {
        label:'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label:'Textos y fechas',
            icon: 'pi pi-book',
            routerLink: '/'
          },
          {
            label:'Numeros',
            icon: 'pi pi-sort-numeric-up',
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
        items:[]
      }
];
  }

}
