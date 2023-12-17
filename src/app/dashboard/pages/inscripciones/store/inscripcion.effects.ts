import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map} from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { InscripcionActions } from './inscripcion.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Alumno } from 'src/app/models/alumno.class';
import { Curso } from 'src/app/models/curso.class';
import { CreateInscripcionPayload, Inscripcion } from '../models/inscripcion.interface';



@Injectable()
export class InscripcionEffects {
  loadInscripciones$ = createEffect(() => {
    return this.actions$.pipe(
      /* Se filtran las acciones de tipo InscripcionActions.loadInscripcions*/
      ofType(InscripcionActions.loadInscripcion),
      concatMap(() =>
        //Concatena el observable de la accion con otro observable
        this.obtenerInscripciones().pipe(
          //si la peticion es valida, se obtiene el listado
          map((data) => InscripcionActions.loadInscripcionSuccess({ data })),
          /* Si la peticion es invalida, se obtiene un error */
          catchError((error) =>
            of(InscripcionActions.loadInscripcionFailure({ error }))
          )
        )
      )
    );
  });
  loadInscripcionsDialogOptions$ = createEffect(() =>
    this.actions$.pipe(
      //filtrar acciones loadEnrollmentDialogOptions
      ofType(InscripcionActions.loadInscripcionDialogOptions),
      concatMap(() =>
        this.getInscripcionesDialogOptions().pipe(
          map((resp) =>
            // si sale bien la peticion, se dispara la accion: loadEnrollmentDialogOptionsSuccess
            InscripcionActions.loadInscripcionDialogOptionsSuccess(resp)
          ),
          catchError((err) =>
            of(
              InscripcionActions.loadInscripcionsDialogOptionsFailure({
                error: err,
              })
            )
          )
        )
      )
    )
  );

  crearInscripcion$ = createEffect(() =>
  this.actions$.pipe(
    ofType(InscripcionActions.crearInscripcion),
    concatMap((action) => {
      return this.crearInscripcion(action.payload).pipe(
        // Si sale bien la peticion
        map((data) => InscripcionActions.loadInscripcion()),
        // Si hay error en la peticion
        catchError((error) =>
          of(InscripcionActions.crearInscripcionFailure({ error }))
        )
      );
    })
  )
);

  constructor(private actions$: Actions, private httpClient: HttpClient) {}
  getInscripcionesDialogOptions(): Observable<{
    cursos: Array<Curso>,
    alumnos: Array<Alumno>
  }> {
    return forkJoin([
      this.httpClient.get<Array<Curso>>(`${environment.baseUrl}/cursos`),
      this.httpClient.get<Array<Alumno>>(`${environment.baseUrl}/alumnos`),
    ]).pipe(
      map((v) =>{

        return{
          cursos : v[0],
          alumnos : v[1]    
        }
      }          
    
      )
    );
  }

  crearInscripcion(payload: CreateInscripcionPayload): Observable<CreateInscripcionPayload> {
    return this.httpClient.post<CreateInscripcionPayload>(
      `${environment.baseUrl}/inscripciones`,
      payload
    );
  }

  /* Metodo para obtener el listado de inscripciones en la api */
  obtenerInscripciones(): Observable<Array<Inscripcion>> {
    return this.httpClient.get<Array<Inscripcion>>(
      `${environment.baseUrl}/inscripciones?_expand=curso&_expand=alumno`
    );
  }
}
