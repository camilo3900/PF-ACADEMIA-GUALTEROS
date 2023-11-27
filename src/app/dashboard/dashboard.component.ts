import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  opensidenav=false;


  constructor(){}
  /* funciones para abrir y cerrar menu */
  openMenu():void{this.opensidenav = true}
  closeMenu(): void{this.opensidenav= false}

}
