import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  opensidenav=false;

  @ViewChild('drawer')
  sidenav?: MatSidenav
  constructor(){}

  openMenu():void{this.opensidenav = true}
  closeMenu(): void{this.opensidenav= false}

}
