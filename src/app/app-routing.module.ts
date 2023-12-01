import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { AlumnosComponent } from './dashboard/pages/alumnos/alumnos.component';
import { ProfesoresComponent } from './dashboard/pages/profesores/profesores.component';
import { CursosComponent } from './dashboard/pages/cursos/cursos.component';

const routes: Routes = [
  { path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'alumnos',
        component: AlumnosComponent
      },
      {
        path: 'cursos',
        component: CursosComponent
      },
      {
        path: 'profesores',
        component: ProfesoresComponent
      },
      {
        path: '**',
        redirectTo: 'cursos'
        
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    
   
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
