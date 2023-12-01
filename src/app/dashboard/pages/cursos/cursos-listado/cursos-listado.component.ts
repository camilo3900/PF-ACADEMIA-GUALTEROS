import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from 'src/app/models/curso.class';

@Component({
  selector: 'app-cursos-listado',
  templateUrl: './cursos-listado.component.html',
  styleUrls: ['./cursos-listado.component.scss']
})
export class CursosListadoComponent {

  @Input()
  listaCursos : Array<Curso> = [];

  @Output()
  editarCurso = new EventEmitter<Curso>();
  @Output()
  eliminarCurso = new EventEmitter<number>();


  
  displayedColumns = ['id', 'nombre', 'fechaInicio', 'fechaFin', 'estado', 'opciones'];
}
