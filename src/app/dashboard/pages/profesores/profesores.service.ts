import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profesor } from 'src/app/models/profesor.class';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  /* Se carga la lista de profesores */
  listaProfes: Array<Profesor> =  [{
    id:1,
    nombre: "Charles",
    apellido: "Xavier",
    correo: "chx@email.com",
    edad:71   
  },
  {
    id:2,
    nombre: "Erik",
    apellido: "Puentes",
    correo: "ep.45@email.com",
    edad:44   
  },
  {
    id:3,
    nombre: "Darius",
    apellido: "Homayoun",
    correo: "dr@email.com",
    edad:32  
  },
  {
    id:4,
    nombre: "Dario",
    apellido: "Gomez",
    correo: "gomes.1407@email.com",
    edad:54  
  },
  {
    id:5,
    nombre: "Christian",
    apellido: "Rincón",
    correo: "rincon@email.com",
    edad:48  
  },
  {
    id:6,
    nombre: "Rodrigo",
    apellido: "Marangoni",
    correo: "rm@email.com",
    edad:45  
  },]
  constructor() { 

  }

  /* Se crea el metodo para obtener el listado de profesores */


  getProfesores$(): Observable<Array<Profesor>>{
    return of(this.listaProfes)
  }
  agregarProfesores$(profesor: Profesor): Observable<Array<Profesor>>{
    this.listaProfes.push(profesor);
    return of([...this.listaProfes])
  }
  editarProfesores$(profeId: number, pyload: Profesor): Observable<Array<Profesor>>{
    this.listaProfes = this.listaProfes.map((dato)=> dato.id === profeId?{...dato,...pyload }: dato)
    return of([...this.listaProfes])
  }
  eliminarProfesores$(profeId: number): Observable<Array<Profesor>>{
    this.listaProfes = this.listaProfes.filter((el)=>el.id !== profeId);
    return of([...this.listaProfes])
  }

  getProfesorById$(profeId: number): Observable<Profesor|undefined>{
    return of(this.listaProfes.find((pro)=>pro.id === profeId))
  }





}
