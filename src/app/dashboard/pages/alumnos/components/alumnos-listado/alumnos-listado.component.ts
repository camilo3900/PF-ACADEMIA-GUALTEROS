import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.class';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.scss']
})
export class AlumnosListadoComponent {


  @Input()
  dataAlumnos: Array<Alumno> = [];


  @Output()
  editAlumno = new EventEmitter<Alumno>();
  @Output()
  deleteAlumno = new EventEmitter<number>()


  displayedColumns= ['id', 'fullName', 'correo', 'opciones']

}
