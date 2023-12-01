import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { CursosFormularioComponent } from './cursos-formulario/cursos-formulario.component';
import { CursosListadoComponent } from './cursos-listado/cursos-listado.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    CursosComponent,
    CursosFormularioComponent,
    CursosListadoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  exports:[
    CursosComponent,
    CursosFormularioComponent,
    CursosListadoComponent
  ]
})
export class CursosModule { }
