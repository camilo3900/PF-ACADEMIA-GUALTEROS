import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.class';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.scss']
})
export class AlumnosListadoComponent {

  /* Listado es manipulado por el componente padre */
  @Input()
  dataAlumnos: Array<Alumno> = [];
  /* las acciones detalle, editar y eliminar son enviadas desde la tabla al padre */
  @Output()
  editAlumno = new EventEmitter<Alumno>();
  @Output()
  deleteAlumno = new EventEmitter<number>()
  constructor(private router: Router){

  }
  detailAlumno(alumnoId: number): void{
    this.router.navigate([
      'dashboard', 'alumnos', 'detalle', alumnoId
    ])

  }
  /* Array de encabezados de la tabla-alumnos */
  displayedColumns= ['id', 'fullName', 'correo', 'opciones']

}
