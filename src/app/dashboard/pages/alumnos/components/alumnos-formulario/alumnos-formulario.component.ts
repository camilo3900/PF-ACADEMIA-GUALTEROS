import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos-formulario',
  templateUrl: './alumnos-formulario.component.html',
  styleUrls: ['./alumnos-formulario.component.scss']
})
export class AlumnosFormularioComponent {

  alumnoForm: FormGroup;

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<AlumnosFormularioComponent>){

     /* Validaciones formulario de alumnos */
     this.alumnoForm  = this.fb.group({
      nombre: ["", Validators.required],
      apellido:["", Validators.required],
      correo: ["", [Validators.required, Validators.email]]
    });

  }


  onSubmit(): void{

    if(this.alumnoForm.invalid){
      this.alumnoForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.alumnoForm.value);
    }

  }

}
