import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Curso } from 'src/app/models/curso.class';
import { Usuario } from 'src/app/models/usuario.class';

@Component({
  selector: 'app-cursos-listado',
  templateUrl: './cursos-listado.component.html',
  styleUrls: ['./cursos-listado.component.scss']
})
export class CursosListadoComponent {
  public authUser$: Observable<Usuario | null>;
  public userRole: string|undefined;
  /* Listado es definido por el componente padre */
  @Input()
  listaCursos : Array<Curso> = [];
  /* Las acciones editar y eliminar son enviadas desde el componente hijo al padre */
  @Output()
  editarCurso = new EventEmitter<Curso>();
  @Output()
  eliminarCurso = new EventEmitter<number>();
  constructor(private servicio: AuthService){
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

  /* Array de los encabezados de tabla-cursos */
  displayedColumns = ['id', 'nombre', 'fechaInicio', 'fechaFin', 'estado', 'opciones'];
}
