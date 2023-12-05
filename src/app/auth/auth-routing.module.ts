import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth.module';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    { 
        path: '', 
        component: AuthComponent,
        children:[
            {
                path: 'login',
                loadChildren: () => import('./pages/login/login.module').then((m)=>m.LoginModule)
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login',
      },
        
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
