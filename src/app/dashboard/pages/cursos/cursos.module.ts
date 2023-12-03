import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursosListadoComponent } from './components/cursos-listado/cursos-listado.component';
import { CursosFormularioComponent } from './components/cursos-formulario/cursos-formulario.component';




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
