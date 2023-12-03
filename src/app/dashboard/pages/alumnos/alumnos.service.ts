import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from 'src/app/models/alumno.class';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos: Array<Alumno> =[
    {
      id:1,
      nombre: "Laura",
      apellido: "Vidal",
      correo: "lara.1629@email.com",
      edad:15
    },
    {
      id:2,
      nombre: "Diego",
      apellido: "Patarroyo",
      correo: "diego@email.com",
      edad:22
    },
    {
      id:3,
      nombre: "Fabian",
      apellido: "Guevara",
      correo: "fgue.33@email.com",
      edad:36
    },
    {
      id:4,
      nombre: "Luis",
      apellido: "Escobar",
      correo: "lucho@email.com",
      edad:18
    },
    {
      id:5,
      nombre: "Manuel",
      apellido: "Ortiz",
      correo: "manuel@email.com",
      edad:24
    },
  ];
  constructor() { }



  obtenerAlumnos$(): Observable<Array<Alumno>>{
    return of(this.alumnos)
  }

  agregarAlumno$(alumno: Alumno): Observable<Array<Alumno>>{
    this.alumnos.push(alumno);
    return of([...this.alumnos])
  }
  editarAlumno$(alumno: Alumno, alumnoId: number): Observable<Array<Alumno>>{
    this.alumnos = this.alumnos.map((al)=>al.id === alumnoId?{...al, ...alumno}:al);
    return of([...this.alumnos])
  }

  eliminarAlumno$(alumnoId: number): Observable<Array<Alumno>>{
    return of([...(this.alumnos=this.alumnos.filter((al)=>al.id !== alumnoId))])
  }
  getAlumnosById$(alumnoId: number): Observable<Alumno|undefined>{
    return of(this.alumnos.find((el)=>el.id === alumnoId))
  }
}
