import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ToolbarComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    RouterModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
