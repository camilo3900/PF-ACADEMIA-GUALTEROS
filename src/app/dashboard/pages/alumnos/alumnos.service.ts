import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, find, map, of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno.class';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos: Array<Alumno> =[];
  constructor(private httpClient: HttpClient) { }



  obtenerAlumnos$(): Observable<Array<Alumno>>{
    return this.httpClient.get<Array<Alumno>>(`${environment.baseUrl}/alumnos`);
  }

  agregarAlumno$(alumno: Alumno): Observable<Array<Alumno>>{
    return this.httpClient
    .post<Alumno>(`${environment.baseUrl}/alumnos`, alumno)
    .pipe(concatMap(()=>this.obtenerAlumnos$()));
  }
  editarAlumno$(alumno: Alumno, alumnoId: number): Observable<Array<Alumno>>{
    return this.httpClient
      .put<Alumno>(`${environment.baseUrl}/alumnos/${alumnoId}`, alumno)
      .pipe(concatMap(() => this.obtenerAlumnos$()));
  }

  eliminarAlumno$(alumnoId: number): Observable<Array<Alumno>>{
    return this.httpClient
    .delete<Object>(`${environment.baseUrl}/alumnos/${alumnoId}`)
    .pipe(concatMap(()=>this.obtenerAlumnos$()))
  }
  getAlumnosById$(alumnoId: number): Observable<Alumno|undefined>{
    return this.obtenerAlumnos$().pipe(
      map(alumnos => alumnos.find(alumno => alumno.id === alumnoId)))
  }
}
