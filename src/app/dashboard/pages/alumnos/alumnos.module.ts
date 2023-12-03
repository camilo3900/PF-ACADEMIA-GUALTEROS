import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosFormularioComponent } from './components/alumnos-formulario/alumnos-formulario.component';
import { AlumnosListadoComponent } from './components/alumnos-listado/alumnos-listado.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosFormularioComponent,
    AlumnosListadoComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule
  ],
  exports:[
    AlumnosComponent
  ]
})
export class AlumnosModule { }
