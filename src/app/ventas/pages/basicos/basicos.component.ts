import { Component} from '@angular/core';



@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower: string = 'FERNANDO';
  nombreUpper: string = 'fernando';
  nombreCompleto: string = 'FerNAnDO RaMirEZ';

  fecha: Date = new Date();

}
