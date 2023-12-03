import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfesoresService } from './profesores.service';
import { Profesor } from 'src/app/models/profesor.class';
import { Observable, map } from 'rxjs';
import { ProfesoresFormularioComponent } from './components/profesores-formulario/profesores-formulario.component';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent {
    lista$: Observable<Array<Profesor>>;
  constructor(private matDialog: MatDialog, private service: ProfesoresService){
    this.lista$ = service.getProfesores$();
  }

  addProfesor(){
    this.matDialog.open(ProfesoresFormularioComponent).afterClosed().subscribe({
      next: (value)=>{
        if (value) {
          let nuevoProfesor: Profesor;
          this.service.getProfesores$().pipe(map((profeArray)=>{
            nuevoProfesor ={
              id: profeArray.length+1,
              nombre: value.nombre,
              apellido: value.apellido,
              correo: value.correo
            };
          })).subscribe({
            complete: ()=>{
              this.lista$ = this.service.agregarProfesores$(nuevoProfesor);
            }
          });
          }
          
        }
      }
    )

  }

  editProfesor(profesor:Profesor){
    this.matDialog.open(ProfesoresFormularioComponent,{
      data: profesor
    }
      ).afterClosed().subscribe({
          next: (result)=>{
            console.log(result);
            if(!!result){
              this.lista$ = this.service.editarProfesores$(profesor.id, result);
            }
          }
      })
  }

  eliminarProfesor(id: number){
    this.lista$ = this.service.eliminarProfesores$(id);
  }



}
