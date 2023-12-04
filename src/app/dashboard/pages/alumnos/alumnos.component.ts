import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.class';
import { AlumnosService } from './alumnos.service';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosFormularioComponent } from './components/alumnos-formulario/alumnos-formulario.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: []
})
export class AlumnosComponent {


  listado$: Observable<Array<Alumno>>;
  constructor(private servicio: AlumnosService, private matDialog: MatDialog){
    /* Se carga el listado de alumnos del servicio */
    this.listado$ = this.servicio.obtenerAlumnos$();
  }
  agregarAlumno(): void{
    this.matDialog.open(AlumnosFormularioComponent).afterClosed().subscribe({
      next: (result)=>{
        if(!!result){
          let nuevoAlumno : Alumno
          this.servicio.obtenerAlumnos$().pipe(map((value)=>{
            nuevoAlumno={
              id: value.length+1,
              nombre: result.nombre,
              apellido: result.apellido,
              correo: result.correo,
              edad: 1
            }
          })).subscribe({
            complete: () =>{
             this.listado$= this.servicio.agregarAlumno$(nuevoAlumno);
            }
          })
        }
      }
    })
    
  }

  editarAlumno(alumno: Alumno){
    this.matDialog.open(AlumnosFormularioComponent,{
      data: alumno
    }).afterClosed()
    .subscribe({
      next: (result)=>{
        if (!!result) {
          this.listado$ = this.servicio.editarAlumno$(result, alumno.id );
        }
      }
    })
  }

  eliminarAlumno(alumnoId: number){
    this.listado$ = this.servicio.eliminarAlumno$(alumnoId);
  }

}
