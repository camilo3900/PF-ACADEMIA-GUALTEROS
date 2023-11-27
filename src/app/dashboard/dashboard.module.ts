import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { CursosModule } from './pages/cursos/cursos.module';
import { AlumnosModule } from './pages/alumnos/alumnos.module';




@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    CursosModule,
    AlumnosModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
