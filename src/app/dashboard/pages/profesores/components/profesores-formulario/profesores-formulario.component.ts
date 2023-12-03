import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Profesor } from 'src/app/models/profesor.class';
import { ProfesoresService } from '../../profesores.service';

@Component({
  selector: 'app-profesores-formulario',
  templateUrl: './profesores-formulario.component.html',
  styles: [
  ]
})
export class ProfesoresFormularioComponent {
  profesoresForm: FormGroup;
  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<ProfesoresFormularioComponent>, private servicio: ProfesoresService,
    @Inject(MAT_DIALOG_DATA)
    public isEditing?: Profesor){
    

      this.profesoresForm = this.fb.group({
        nombre: new FormControl("", [Validators.required]),
        apellido: new FormControl("", [Validators.required]),
        correo: new FormControl("", [Validators.required, Validators.email])
      })

      if (!!this.isEditing) {
       this.servicio.getProfesorById$(this.isEditing.id).subscribe({
        next: (x)=>{
          if(x){
            this.profesoresForm.patchValue(x);
          }
         
        }
       })
      }







      
    }

    get profesorNombre(){
      return this.profesoresForm.controls['nombre'];
    }
    get profesorApellido(){
      return this.profesoresForm.controls['apellido'];
    }
    get profesorCorreo(){
      return this.profesoresForm.controls['correo'];
    }

    
    onsubmit(): void{

      if (this.profesoresForm.invalid) {
        this.profesoresForm.markAllAsTouched();
      }else{
        this.matDialogRef.close(this.profesoresForm.value);
      }
        
    }
}
