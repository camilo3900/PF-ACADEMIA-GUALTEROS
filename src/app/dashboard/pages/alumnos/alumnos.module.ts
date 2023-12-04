import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosFormularioComponent } from './components/alumnos-formulario/alumnos-formulario.component';
import { AlumnosListadoComponent } from './components/alumnos-listado/alumnos-listado.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlumnosDetalleComponent } from './components/alumnos-detalle/alumnos-detalle.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AlumnosComponent,
    AlumnosFormularioComponent,
    AlumnosListadoComponent,
    AlumnosDetalleComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    AlumnosComponent
  ]
})
export class AlumnosModule { }
