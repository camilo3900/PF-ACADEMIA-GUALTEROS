import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CursosFormularioComponent } from './components/cursos-formulario/cursos-formulario.component';
import { Curso, Disponible } from 'src/app/models/curso.class';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {
  listadoCursos: Array<Curso> = [
    {
      id: 1,
      nombre: "Curso de Propulsión Espacial",
      fechaInicio: new Date("2023-01-01"),
      fechaFin: new Date("2023-02-01"),
      estado: Disponible.habilitado
  },
  {
      id: 2,
      nombre: "Astronavegación Avanzada",
      fechaInicio: new Date("2023-02-15"),
      fechaFin: new Date("2023-03-15"),
      estado: Disponible.habilitado
  },
  ];
  constructor(private matDialog: MatDialog){

  }
  agregarCurso(): void{

    this.matDialog.open(CursosFormularioComponent).afterClosed().subscribe({
      next: (valor)=>{
        if(!!valor){
          this.listadoCursos = [
            ...this.listadoCursos,
            {
              ...valor,
              id: this.listadoCursos.length+1
            }
          ]
        }
        
      }
    })


  }

  onEdit(corso: Curso){
    this.matDialog.open(CursosFormularioComponent,{
      data: corso,
    }).afterClosed().subscribe({
      next: (ev)=>{
        this.listadoCursos = this.listadoCursos.map((curso)=> curso.id === corso.id ? {...curso, ...ev}: curso)
      }

    })

  }
  onDelete(corsoId: number): void{
    this.listadoCursos = this.listadoCursos.filter((curso)=>(curso.id !== corsoId));
  }

}
