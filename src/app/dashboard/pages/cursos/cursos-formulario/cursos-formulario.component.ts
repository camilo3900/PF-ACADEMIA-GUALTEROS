import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso.class';
@Component({
  selector: 'app-cursos-formulario',
  templateUrl: './cursos-formulario.component.html',
  styles: [
  ]
})
export class CursosFormularioComponent {

  cursosForm: FormGroup;
  selectedFood : string = "";
  estados = [
    {value: 'Disponible', viewValue: 'Disponible'},
    {value: 'Agotado', viewValue: 'Agotado'},
    
  ];

  constructor(private fb: FormBuilder, private matDialogRef: MatDialogRef<CursosFormularioComponent>,
    @Inject(MAT_DIALOG_DATA)
    public cursoData?:Curso){

    this.cursosForm = this.fb.group({

      nombre: new FormControl("", [Validators.required]),
      estado: new FormControl(this.selectedFood, [Validators.required]),
      fechaInicio: new FormControl("", [Validators.required]),
      fechaFin: new FormControl("", [Validators.required])
    })

    if (!!this.cursoData) {
      this.cursosForm.patchValue(this.cursoData)
    }
  }

  closeForm(): void{
    this.matDialogRef.close();
  }

  onSubmit(): void{
    if(this.cursosForm.invalid){
      this.cursosForm.markAllAsTouched();
    }else{
      this.matDialogRef.close(this.cursosForm.value)
    }
  }

}
