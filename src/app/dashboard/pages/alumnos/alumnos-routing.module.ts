import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { AlumnosDetalleComponent } from './components/alumnos-detalle/alumnos-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent
  },
  {
    path: 'detalle/:id',
    component: AlumnosDetalleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
