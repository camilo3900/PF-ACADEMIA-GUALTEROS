import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profesor } from 'src/app/models/profesor.class';

@Component({
  selector: 'app-profesores-listado',
  templateUrl: './profesores-listado.component.html',
  styleUrls: ['./profesores-listado.component.scss']
})
export class ProfesoresListadoComponent {

  @Input()
  dataSource: Array<Profesor> = [];
  @Output()
  editProfesor= new EventEmitter();
  @Output()
  deleteProfesor = new EventEmitter<number>();
  
  

  displayedColumns= [ "id", "fullname", "email", "events"];
}
