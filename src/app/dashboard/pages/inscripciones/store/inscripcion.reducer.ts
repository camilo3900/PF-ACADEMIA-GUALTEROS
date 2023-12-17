import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripcion.actions';
import { Inscripcion } from '../models/inscripcion.interface';
import { Curso } from 'src/app/models/curso.class';
import { Alumno } from 'src/app/models/alumno.class';

export const inscripcionFeatureKey = 'inscripcion';

export interface State {
  isLoading: boolean;
  isLoadingDialogOptions: boolean;
  inscripciones: Array<Inscripcion>
  error: unknown;
  cursoOptions: Array<Curso>;
  alumnoOptions: Array<Alumno>;
}

export const initialState: State = {
  isLoading: false,
  isLoadingDialogOptions: false,
  inscripciones: [],
  cursoOptions: [],
  alumnoOptions: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(InscripcionActions.loadInscripcion, state => ({
    ...state,
    isLoading: true,
  })),
  on(InscripcionActions.loadInscripcionSuccess, (state, { data }) => ({
    ...state,
    isLoading: false,
    inscripciones: data,
  })),
  on(InscripcionActions.loadInscripcionFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  })),
   //Accion de reducer: loadEnrollmentDialogOptions
   on(InscripcionActions.loadInscripcionDialogOptions, (state) => {
    return {
      ...state,
      isLoadingDialogOptions: true,
    };
  }),
  //Accion de reducer: loadEnrollmentDialogOptionsSuccess
  on(InscripcionActions.loadInscripcionDialogOptionsSuccess, (state, action) => ({
    ...state,
    cursoOptions: action.cursos,
    alumnoOptions: action.alumnos,
    isLoadingDialogOptions: false,
  })),

  //Accion de reducer: loadEnrollmentDialogOptionsFailure
  on(InscripcionActions.loadInscripcionsDialogOptionsFailure, (state, action) => ({
    ...state,
    error: action.error,
    isLoadingDialogOptions: false,
  }))
);

export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});

