import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//PrimeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';


//no es necesario importar los modulos del primeNG, basta solo con  exportarlos
@NgModule({
  declarations: [],
  imports: [
    CommonModule

  ],
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }
