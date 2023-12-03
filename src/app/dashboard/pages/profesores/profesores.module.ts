import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { ProfesoresListadoComponent } from './components/profesores-listado/profesores-listado.component';
import { ProfesoresFormularioComponent } from './components/profesores-formulario/profesores-formulario.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfesoresComponent,
    ProfesoresListadoComponent,
    ProfesoresFormularioComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    SharedModule
  ],
  exports:[
    ProfesoresComponent
  ]
})
export class ProfesoresModule { }
