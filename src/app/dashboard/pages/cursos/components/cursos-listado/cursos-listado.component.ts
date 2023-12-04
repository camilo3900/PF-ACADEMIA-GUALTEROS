import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Curso } from 'src/app/models/curso.class';

@Component({
  selector: 'app-cursos-listado',
  templateUrl: './cursos-listado.component.html',
  styleUrls: ['./cursos-listado.component.scss']
})
export class CursosListadoComponent {
  /* Listado es definido por el componente padre */
  @Input()
  listaCursos : Array<Curso> = [];
  /* Las acciones editar y eliminar son enviadas desde el componente hijo al padre */
  @Output()
  editarCurso = new EventEmitter<Curso>();
  @Output()
  eliminarCurso = new EventEmitter<number>();


  /* Array de los encabezados de tabla-cursos */
  displayedColumns = ['id', 'nombre', 'fechaInicio', 'fechaFin', 'estado', 'opciones'];
}
