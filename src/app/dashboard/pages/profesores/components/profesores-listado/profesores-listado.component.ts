import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Profesor } from 'src/app/models/profesor.class';
import { Usuario } from 'src/app/models/usuario.class';

@Component({
  selector: 'app-profesores-listado',
  templateUrl: './profesores-listado.component.html',
  styleUrls: ['./profesores-listado.component.scss']
})
export class ProfesoresListadoComponent {
  public authUser$: Observable<Usuario | null>;
  public userRole: string|undefined;
  @Input()
  dataSource: Array<Profesor> = [];
  @Output()
  editProfesor= new EventEmitter<Profesor>();
  @Output()
  deleteProfesor = new EventEmitter<number>();

  constructor( private servicio: AuthService){
    this.authUser$ = this.servicio.authUser;
    this.getUserRole()
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
  /* array de encabezados de tabla-profesores*/
  displayedColumns= [ "id", "fullname", "email", "events"];
  displayedColumns2= [ "id", "fullname", "email"];
}
