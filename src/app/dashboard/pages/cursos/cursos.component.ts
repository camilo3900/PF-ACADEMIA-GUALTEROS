import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursosFormularioComponent } from './components/cursos-formulario/cursos-formulario.component';
import { Curso, Disponible } from 'src/app/models/curso.class';
import { Observable, map } from 'rxjs';
import { CursosService } from './cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  cursos$: Observable<Array<Curso>> /* Variable para almacenar cursos */
  constructor(private matDialog: MatDialog, private servicio: CursosService){
    this.cursos$ = this.servicio.obtenerCursos$();/* Se obtiene el listado llamando el servicio */
  }
  agregarCurso(): void{
    this.matDialog.open(CursosFormularioComponent).afterClosed().subscribe({
      next: (result)=>{
        if(result){
          let nuevoCurso : Curso;
          this.servicio.obtenerCursos$().pipe(map((el)=>{
            nuevoCurso = {
              id: el.length+1,
              nombre: result.nombre,
              estado: result.estado,
              fechaInicio: result.fechaInicio,
              fechaFin: result.fechaFin
            }
          })).subscribe({
            complete: ()=>{
              Swal.fire({
                title: "Operacion Exitosa!",
                text: `Se ha creado el curso: ${nuevoCurso.nombre}`,
                icon: "success"
              });
              this.cursos$ = this.servicio.agregarCurso$(nuevoCurso);
            }
          })
        }
      }
    })
  }
  /* Funcion para editar Curso */
  editarCurso(curso: Curso): void{
    this.matDialog.open(CursosFormularioComponent, {
      data: curso
    }).afterClosed()
    .subscribe({
      next: (result)=>{
        if(!!result){
          /* Se llama el servicio para editar curso */
          this.cursos$ = this.servicio.editarCurso$(result, curso.id);
        }
      }
    })
  }
  eliminarCurso(cursoId: number): void{
    Swal.fire({
      title: '¿Deseas eliminar este curso?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí puedes realizar la acción de eliminación
        Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
        /* Se llama el servicio para eliminar curso */
        this.cursos$ = this.servicio.eliminarCurso$(cursoId);
      }
    });
    
  }
}
