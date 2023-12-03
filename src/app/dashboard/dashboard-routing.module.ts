import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { InscripcionesComponent } from './pages/inscripciones/inscripciones.component';

const routes: Routes = [
    {
        path:'',
        component: DashboardComponent,
        children:[
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m=>m.HomeModule)
              },
              {
                path: 'alumnos',
                loadChildren: () => import('./pages/alumnos/alumnos.module').then(m=>m.AlumnosModule)
              },
              {
                path: 'cursos',
                loadChildren: () => import('./pages/cursos/cursos.module').then(m=>m.CursosModule)
              },
              {
                path: 'profesores',
                loadChildren: () => import('./pages/profesores/profesores.module').then(m=>m.ProfesoresModule)
              },
              {
                path: 'inscripciones',
                loadChildren: () => import('./pages/inscripciones/inscripciones.module').then(m=>m.InscripcionesModule)
              },
              {
                path: '**',
                redirectTo: 'cursos'
                
              }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }