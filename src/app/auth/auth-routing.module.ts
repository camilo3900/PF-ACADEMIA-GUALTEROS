import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth.module';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    { 
        path: '', 
        component: AuthComponent
    } 
        
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
