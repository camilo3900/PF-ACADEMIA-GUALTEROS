import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map, of } from 'rxjs';
import { Profesor } from 'src/app/models/profesor.class';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  /* Se carga la lista de profesores */
  listaProfes: Array<Profesor> =  []
  constructor(private httpClient: HttpClient) { 

  }

  /* metodo para obtener listado de profesores */
  obtenerProfesores$(): Observable<Array<Profesor>>{
    return this.httpClient.get<Array<Profesor>>(`${environment.baseUrl}/profesores`);
  }
  /* metodo para agregar profesores */
  agregarProfesores$(profesor: Profesor): Observable<Array<Profesor>>{
    return this.httpClient
    .post<Profesor>(`${environment.baseUrl}/profesores`, profesor)
    .pipe(concatMap(()=>this.obtenerProfesores$()));
  }
  /* metodo para editar profesores  */
  editarProfesores$(profeId: number, profesor: Profesor): Observable<Array<Profesor>>{
    return this.httpClient
      .put<Profesor>(`${environment.baseUrl}/profesores/${profeId}`, profesor)
      .pipe(concatMap(() => this.obtenerProfesores$()));
  }
  /* metodo para eliminar profesors */
  eliminarProfesores$(profeId: number): Observable<Array<Profesor>>{
    return this.httpClient
    .delete<Object>(`${environment.baseUrl}/profesores/${profeId}`)
    .pipe(concatMap(()=>this.obtenerProfesores$()))
  }
  /* metodo para referenciar profesor por id en el formulario */
  getProfesorById$(profeId: number): Observable<Profesor|undefined>{
    return this.obtenerProfesores$().pipe(
      map(profes => profes.find(prof => prof.id === profeId)))
  }





}
