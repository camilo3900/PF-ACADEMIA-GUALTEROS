import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Alumno } from 'src/app/models/alumno.class';
import { Usuario } from 'src/app/models/usuario.class';

@Component({
  selector: 'app-alumnos-listado',
  templateUrl: './alumnos-listado.component.html',
  styleUrls: ['./alumnos-listado.component.scss']
})
export class AlumnosListadoComponent {
  public authUser$: Observable<Usuario | null>;
  public userRole: string|undefined;
  /* Listado es manipulado por el componente padre */
  @Input()
  dataAlumnos: Array<Alumno> = [];
  /* las acciones detalle, editar y eliminar son enviadas desde la tabla al padre */
  @Output()
  editAlumno = new EventEmitter<Alumno>();
  @Output()
  deleteAlumno = new EventEmitter<number>()
  constructor(private router: Router, private servicio: AuthService){
    this.authUser$ = this.servicio.authUser;
    this.getUserRole()
  }
  detailAlumno(alumnoId: number): void{
    this.router.navigate([
      'dashboard', 'alumnos', 'detalle', alumnoId
    ])

  }

  getUserRole(){
    
    this.authUser$.subscribe({
      next: (ev)=>{
        if(!!ev){
         this.userRole = ev?.role
        }
         
      }
    })
    

  }
  /* Array de encabezados de la tabla-alumnos */
  displayedColumns= ['id', 'fullName', 'correo', 'opciones']

}
