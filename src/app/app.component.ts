import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  saludo: string = 'fernando ramirez';

  cambiarNombre() {
    console.log(this.saludo);
  }
}
