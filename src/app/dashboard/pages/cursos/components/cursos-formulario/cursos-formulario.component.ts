import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso.class';
import { CursosService } from '../../cursos.service';
@Component({
  selector: 'app-cursos-formulario',
  templateUrl: './cursos-formulario.component.html',
  styles: [
  ]
})
export class CursosFormularioComponent {

  cursosForm: FormGroup;
  selected : string = "";
  /* Se crea un array de objetos con los estados (disponible|agotado) de los cursos */
  estados = [
    {value: 'Disponible', viewValue: 'Disponible'},
    {value: 'Agotado', viewValue: 'Agotado'},  
  ];

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<CursosFormularioComponent>,
    private servicio: CursosService,
    /* Injectable para enviar datos al form */
    @Inject(MAT_DIALOG_DATA)
    public cursoData?:Curso){

    this.cursosForm = this.fb.group({
      nombre: new FormControl("", [Validators.required]),
      estado: new FormControl(this.selected.valueOf, [Validators.required]),
      fechaInicio: new FormControl("", [Validators.required]),
      fechaFin: new FormControl("", [Validators.required])
    })

    if (!!this.cursoData) {
      this.servicio.obtenerCursoById$(this.cursoData.id).subscribe({
        next: (result)=>{
          if(result){
            this.cursosForm.patchValue(result);//Se pisan los campos del form
          }
        }
      })
    }
  }
  /* Getters de los controles del formulario */
  get nombreControl(){
    return this.cursosForm.controls['nombre'];
  }
  get estadoControl(){
    return this.cursosForm.controls['estado'];
  }
  get fechaInicioControl(){
    return this.cursosForm.controls['fechaInicio'];
  }
  get fechaFinControl(){
    return this.cursosForm.controls['fechaFin'];
  }
  /* Funcion para cerrar el formulario */
  closeForm(): void{
    this.matDialogRef.close();
  }
  /* Funcion para guardar datos del formulario */
  onSubmit(): void{
    if(this.cursosForm.invalid){
      this.cursosForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.cursosForm.value)
    }
  }

}
