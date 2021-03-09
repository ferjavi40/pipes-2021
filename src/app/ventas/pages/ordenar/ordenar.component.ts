import { Component } from '@angular/core';




@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent  {

  nombre: string = "fernando javier";
  enMayusculas: boolean= true;

  heroes: any[];



  hacerMayusculas() {
    if(this.enMayusculas){
      this.enMayusculas= false
    }else{
      this.enMayusculas= true;
    }

  }


}
