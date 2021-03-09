import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  nombre: string = "fernando javier";

  enMayusculas: boolean= true;

  constructor() { }

  ngOnInit(): void {
  }

  hacerMayusculas() {
    if(this.enMayusculas){
      this.enMayusculas= false
    }else{
      this.enMayusculas= true;
    }

  }


}
