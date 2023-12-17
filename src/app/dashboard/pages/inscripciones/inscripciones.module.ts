import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionEffects } from './store/inscripcion.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionFeature } from './store/inscripcion.reducer';
import { InscripcionesListadoComponent } from './compoents/inscripciones-listado/inscripciones-listado.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesFormularioComponent } from './compoents/inscripciones-formulario/inscripciones-formulario.component';


@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesListadoComponent,
    InscripcionesFormularioComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionFeature),
    EffectsModule.forFeature([InscripcionEffects])
  ],
  exports: [
    InscripcionesComponent
  ]
})
export class InscripcionesModule { }
