import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  saludo: string = 'fernando ramirez';

  constructor( private primengConfig: PrimeNGConfig) {

  }

  cambiarNombre() {
    console.log(this.saludo);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
