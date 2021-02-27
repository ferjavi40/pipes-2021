import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { RelojServiceService } from '../../services/reloj-service.service';






@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit  {

  nombreLower: string = 'FERNANDO';
  nombreUpper: string = 'fernando';
  nombreCompleto: string = 'FerNAnDO RaMirEZ';

  fecha: number = Date.now();
  Uhr:Observable<Date>;

  constructor( private relojServicio:RelojServiceService ){

  }

  ngOnInit() {
    this.Uhr= this.relojServicio.getCurrentTime();
  }

}
