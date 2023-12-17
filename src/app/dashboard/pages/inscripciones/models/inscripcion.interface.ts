import { Alumno } from "src/app/models/alumno.class";
import { Curso } from "src/app/models/curso.class";

export interface Inscripcion {
    id: number;
    cursoId: number;
    alumnoId: number;
    alumno?: Alumno;
    curso?: Curso;
}

export interface CreateInscripcionPayload {
    cursoId: number | null;
    alumnoId: number | null;
  }