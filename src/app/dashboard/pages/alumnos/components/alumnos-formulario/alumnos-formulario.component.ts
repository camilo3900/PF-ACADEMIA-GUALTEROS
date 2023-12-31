import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno.class';
import { AlumnosService } from '../../alumnos.service';

@Component({
  selector: 'app-alumnos-formulario',
  templateUrl: './alumnos-formulario.component.html',
  styleUrls: ['./alumnos-formulario.component.scss']
})
export class AlumnosFormularioComponent {

  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<AlumnosFormularioComponent>,
    private servicio: AlumnosService,
    @Inject(MAT_DIALOG_DATA)
    public isEditing?: Alumno){

     /* Validaciones formulario de alumnos */
     this.alumnoForm  = this.fb.group({
      nombre: ["", Validators.required],
      apellido:["", Validators.required],
      correo: ["", [Validators.required, Validators.email]]
    });

    if (isEditing) {
      this.servicio.getAlumnosById$(isEditing.id).subscribe({
        next: (result)=>{
          if(result){
            this.alumnoForm.patchValue(result);
          }   
        }
      })
        
    }

  }
  /* Metodos para obtener los controls del formulario */
  get nombreControl(){
    return this.alumnoForm.controls['nombre']
  }
  get apellidoControl(){
    return this.alumnoForm.controls['apellido']
  }
  get correoControl(){
    return this.alumnoForm.controls['correo']
  }

  /* Funcion para enviar datos del form */
  onSubmit(): void{

    if(this.alumnoForm.invalid){
      this.alumnoForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.alumnoForm.value);
    }

  }

}
