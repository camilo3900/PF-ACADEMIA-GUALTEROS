import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { /* Se definen como rutas principales el dashboard y el auth */
    path: 'dashboard',
    loadChildren: () =>import('./dashboard/dashboard.module').then((m)=> m.DashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule)

  },
  {/* Por defecto se mostrará el login */
    path: '**',
    redirectTo: 'dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
