import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { saludo } from './Components/saludo/saludo.component';
import { CardComponent } from './Components/card/card.component';
import { TarjetaComponent } from "./Components/tarjeta/tarjeta.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, saludo, CardComponent, TarjetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bienvenido a mi primer ejemplo con Angular';
  profesion = 'Ingeniero en Computación';
  puesto = 'Gerente de Gestión de Servicios TI';
  empresa = 'MEGACACABLE';
  nombre = 'Adonai Rios Rodríguez';

  datillo: string | number = 1;
  
  carro: carModel = {
    brand:'Ford',
    model:'Focus' ,
    year:2024
  }

  listCars: Array<any> = [
    {
      brand:'Chevrolter' , 
      model:'Camaro',
      year:2024
    },
    {
      brand:'Ford' , 
      model:'Mustang',
      year:2024
    }    

  ];
  

}

interface carModel {
  brand:string;
  model:string;
  year?:number;
}