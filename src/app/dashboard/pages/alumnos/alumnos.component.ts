import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.class';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: []
})
export class AlumnosComponent {


  listado: Array<Alumno> =  [
    {
      id:1,
      nombre: "Diego",
      apellido: "Patarroyo",
      correo: "diego@email.com",
      edad:22
    },
    {
      id:2,
      nombre: "Fabian",
      apellido: "Guevara",
      correo: "fgue.33@email.com",
      edad:36
    },
    {
      id:3,
      nombre: "Luis",
      apellido: "Escobar",
      correo: "lucho@email.com",
      edad:36
    },
    {
      id:4,
      nombre: "Manuel",
      apellido: "Ortiz",
      correo: "manuel@email.com",
      edad:36
    },
    
  ]


  agregarAlumno(): void{
    alert("AGREGANDO ALUMNO")
  }

}
