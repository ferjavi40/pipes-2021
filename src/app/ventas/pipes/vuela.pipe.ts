import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

  public poder:string= ''; 

  transform(valor:boolean): string {
    
    if(valor==true){
      return this.poder='Puede Volar';
    }else{
      return this.poder ='No puede volar';
    }
    
  }

}
