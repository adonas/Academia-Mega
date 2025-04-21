import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenido a mi primer ejemplo con Angular';
  profesion = 'Ingeniero en Computación';
  puesto = 'Gerente de Gestión de Servicios TI';

}
