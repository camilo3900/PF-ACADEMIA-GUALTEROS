import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable, take } from 'rxjs';
import { Alumno } from 'src/app/models/alumno.class';
import { Curso } from 'src/app/models/curso.class';
import { selectAlumnoOptions, selectCursoOptions, selectIsLoadingDialogOptions } from '../../store/inscripcion.selectors';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup } from '@angular/forms';
import { InscripcionActions } from '../../store/inscripcion.actions';
import { Actions, ofType } from '@ngrx/effects';


@Component({
  selector: 'app-inscripciones-formulario',
  templateUrl: './inscripciones-formulario.component.html',
  styles: [
  ]
})
export class InscripcionesFormularioComponent {
  cursoOptions$: Observable<Array<Curso>>;
  alumnoOptions$: Observable<Array<Alumno>>;
  isLoading$: Observable<boolean>;

  userIdControl = new FormControl<number | null>(null);
  courseIdControl = new FormControl<number | null>(null);

  inscrpcionForm = new FormGroup({
    cursoId: this.courseIdControl,
    alumnoId: this.userIdControl,
  });
  constructor(private matDialogRef: MatDialogRef<InscripcionesFormularioComponent>, private store: Store, private action$: Actions){
    this.store.dispatch(InscripcionActions.loadInscripcionDialogOptions());
    this.isLoading$ = this.store.select(selectIsLoadingDialogOptions);
    this.cursoOptions$ = this.store.select(selectCursoOptions);
    this.alumnoOptions$ = this.store.select(selectAlumnoOptions);

    this.action$
    .pipe(ofType(InscripcionActions.loadInscripcion), take(1))
    .subscribe({
      next: () => this.matDialogRef.close(),
    });
  }
  onSubmit():void{
    this.store.dispatch(
      InscripcionActions.crearInscripcion({
        payload: this.inscrpcionForm.getRawValue(),
      })
    )
  }
}
