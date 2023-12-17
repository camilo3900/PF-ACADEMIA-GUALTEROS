import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from './store/inscripcion.actions';
import { MatDialog } from '@angular/material/dialog';
import { InscripcionesFormularioComponent } from './compoents/inscripciones-formulario/inscripciones-formulario.component';
import { Observable, concatMap } from 'rxjs';
import { CreateInscripcionPayload } from './models/inscripcion.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent {

  inscripciones$: Observable<Array<CreateInscripcionPayload>>

  constructor(private store: Store, private matDialog: MatDialog, private httpClient: HttpClient){
    
    this.inscripciones$ = this.obtenerInscripciones(); 
    this.store.dispatch(InscripcionActions.loadInscripcion());
  }
  deleteEnrollment(id: number): Observable<CreateInscripcionPayload[]> {
    return this.httpClient
    .delete<Object>(`${environment.baseUrl}/inscripciones/${id}`)
    .pipe(concatMap(() => this.obtenerInscripciones())
    )
  }
  
  onDeleteEnrollment(inscripcionId: number): void {
    if (confirm('Estas seguro de eliminar la inscripcion?')) {
      this.inscripciones$ = this.deleteEnrollment(inscripcionId)
     
    }
  }


  obtenerInscripciones(): Observable<Array<CreateInscripcionPayload>> {
    return this.httpClient.get<Array<CreateInscripcionPayload>>(`${environment.baseUrl}/inscripciones`);
    
  }
  nuevaInscripcion(): void{
    this.matDialog.open(InscripcionesFormularioComponent);
  }

}
