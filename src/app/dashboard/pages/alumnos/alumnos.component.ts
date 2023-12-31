import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.class';
import { AlumnosService } from './alumnos.service';
import { Observable, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlumnosFormularioComponent } from './components/alumnos-formulario/alumnos-formulario.component';
import Swal from 'sweetalert2';

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
              Swal.fire({
                title: "Operacion Exitosa!",
                text: `Se agregado a ${nuevoAlumno.nombre} en la lista de alumnos! `,
                icon: "success"
              });
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

  eliminarAlumno(alumnoId: number): void{
    Swal.fire({
      title: '¿Deseas eliminar este curso?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí se filtra el nombre del alumno
        this.servicio.getAlumnosById$(alumnoId).pipe(map((c)=>c?.nombre)).subscribe((nombre=>{
          if(nombre){
            Swal.fire('Eliminado', `El alumno ${nombre} ha sido eliminado`, 'success');            
          }
        }));
    this.listado$ = this.servicio.eliminarAlumno$(alumnoId);
     
      }
    });
    
  }

}
