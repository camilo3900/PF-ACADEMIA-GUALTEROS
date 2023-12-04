import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Curso, Disponible } from 'src/app/models/curso.class';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  listadoCursos: Array<Curso> = [
    {
      id: 1,
      nombre: "Curso de Propulsión Espacial",
      fechaInicio: new Date("2023-01-01"),
      fechaFin: new Date("2023-02-01"),
      estado: Disponible.habilitado
  },
  {
      id: 2,
      nombre: "Astronavegación Avanzada",
      fechaInicio: new Date("2023-02-15"),
      fechaFin: new Date("2023-03-15"),
      estado: Disponible.habilitado
  },
  ];

  constructor() { }


  obtenerCursos$(): Observable<Array<Curso>>{
    return of(this.listadoCursos)
  }

  agregarCurso$(curso: Curso): Observable<Array<Curso>>{
    this.listadoCursos.push(curso)
    return of([...this.listadoCursos])
  }
  editarCurso$(curso:Curso, cursoId: number): Observable<Array<Curso>>{

    this.listadoCursos = this.listadoCursos.map((el)=> el.id === cursoId ? {...el, ...curso}: el);
    return of([...this.listadoCursos])

  }

  eliminarCurso$(cursoid:number): Observable<Array<Curso>>{
    return of([...(this.listadoCursos = this.listadoCursos.filter((el)=> el.id !== cursoid))]);
  }
  obtenerCursoById$(cursoId: number): Observable<Curso|undefined>{

    return of(this.listadoCursos.find(el=>el.id === cursoId))

  }
}
