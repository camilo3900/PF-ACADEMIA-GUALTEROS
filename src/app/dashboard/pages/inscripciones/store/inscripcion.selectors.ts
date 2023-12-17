import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcion from './inscripcion.reducer';

export const selectInscripcionState = createFeatureSelector<fromInscripcion.State>(
  fromInscripcion.inscripcionFeatureKey
);

export const selectInscripciones = createSelector(
  selectInscripcionState, (state) => state.inscripciones
);
export const selectInscripcionesIsLoading = createSelector(
  selectInscripcionState,
  (state) => state.isLoading
);
export const selectCursoOptions = createSelector(
  selectInscripcionState,
  (state)=>{
    return  state.cursoOptions
  }
  
)
export const selectAlumnoOptions = createSelector(
  selectInscripcionState,
  (state)=> state.alumnoOptions
)

export const selectIsLoadingDialogOptions = createSelector(
  selectInscripcionState,
  (state) => state.isLoadingDialogOptions
)