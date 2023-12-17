import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateInscripcionPayload, Inscripcion } from '../models/inscripcion.interface';
import { Curso } from 'src/app/models/curso.class';
import { Alumno } from 'src/app/models/alumno.class';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Load Inscripcions By Id': props<{ id: number }>(),
    'Load Inscripcion': emptyProps(),
    'Load Inscripcion Success': props<{ data: Array<Inscripcion> }>(),
    'Load Inscripcion Failure': props<{ error: unknown }>(),
    'Load Inscripcion Dialog Options': emptyProps(),
    'Load Inscripcion Dialog Options Success': props<{
      cursos: Array<Curso>,
      alumnos: Array<Alumno>
    }>(),
    'Load Inscripcions Dialog Options Failure': props<{ error: unknown }>(),
    'Crear Inscripcion': props<{payload: CreateInscripcionPayload}>(),
    'Crear Inscripcion Failure': props<{error: unknown }>(),

  }
});
