import { Component } from '@angular/core';
import { HijoComponent } from '../../Components/hijo/hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //nombre = "Adonas Rivers";
  //Simulación de API
   usuarios  = [
    { nombre:"Adonai" , edad:46 , profesion:"Ingeniero" } ,
     { nombre:"Rebeca" , edad:25 , profesion:"Licenciada" } ,
    { nombre:"Emiliano" , edad:17 , profesion:"Estudiante" }, 
    { nombre:"Damaris" , edad:45 , profesion:"Cocinera" }
    
  ]

}
