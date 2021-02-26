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
    
    this.items = [{
      label: 'Inicio',
      items: [
          {label: 'New', icon: 'pi pi-plus'},
          {label: 'Open', icon: 'pi pi-download'},
          {label: 'Contacto', icon: 'pi pi-phone'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Undo', icon: 'pi pi-refresh'},
          {label: 'Redo', icon: 'pi pi-repeat'}
      ]
  }];
  }

}
