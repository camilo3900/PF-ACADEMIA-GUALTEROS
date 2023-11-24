import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
