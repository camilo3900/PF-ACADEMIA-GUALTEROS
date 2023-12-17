import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateInscripcionPayload, Inscripcion } from '../../models/inscripcion.interface';
import { selectInscripciones, selectInscripcionesIsLoading } from '../../store/inscripcion.selectors';

@Component({
  selector: 'app-inscripciones-listado',
  templateUrl: './inscripciones-listado.component.html',
  styleUrls: ['./inscripciones-listado.component.scss']
})
export class InscripcionesListadoComponent {

  @Input()
  dataSource: Array<CreateInscripcionPayload> = [];
  @Output()
  eliminarInscripcion = new EventEmitter<number>();
  inscripciones$ : Observable<Array<Inscripcion>>;
  isLoading$ : Observable<boolean>;

  constructor(private store: Store) {

    this.inscripciones$ = this.store.select(selectInscripciones); 
    this.isLoading$ = this.store.select(selectInscripcionesIsLoading)
  }


  displayedColumns = ['id', 'curso', 'alumno', 'opciones'];

}
