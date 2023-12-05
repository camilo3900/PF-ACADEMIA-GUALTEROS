import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map, of } from 'rxjs';
import { Curso } from 'src/app/models/curso.class';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  listadoCursos: Array<Curso> = [
  ];

  constructor(private httpClient: HttpClient) { }

  /* Se obtienen los cursos de la api */
  obtenerCursos$(): Observable<Array<Curso>>{
    return this.httpClient.get<Array<Curso>>(`${environment.baseUrl}/cursos`)
  }
  /* Se agrega un curso  */
  agregarCurso$(curso: Curso): Observable<Array<Curso>>{
    return this.httpClient
      .post<Curso>(`${environment.baseUrl}/cursos`, curso)
      .pipe(concatMap(() => this.obtenerCursos$()));
  }
  /* Se edita un curso */
  editarCurso$(curso:Curso, cursoId: number): Observable<Array<Curso>>{

    return this.httpClient
      .put<Curso>(`${environment.baseUrl}/cursos/${cursoId}`, curso)
      .pipe(concatMap(() => this.obtenerCursos$()));

  }

  eliminarCurso$(cursoid:number): Observable<Array<Curso>>{
    return this.httpClient
    .delete<Object>(`${environment.baseUrl}/cursos/${cursoid}`)
    .pipe(concatMap(() => this.obtenerCursos$())
    )
  }
  obtenerCursoById$(cursoId: number): Observable<Curso|undefined>{

    return this.obtenerCursos$().pipe(
      map(cursos => cursos.find(curso => curso.id === cursoId)))
  }
}
