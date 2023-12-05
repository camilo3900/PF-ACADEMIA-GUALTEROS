import { Component} from '@angular/core';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Usuario } from 'src/app/models/usuario.class';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public authUser$: Observable<Usuario | null>;

  constructor(private servicio: AuthService){

    this.authUser$ = this.servicio.authUser;
  }

  get nombreUsuario$(): Observable<string> {
    return this.authUser$.pipe(
      map((usuario) => `${usuario?.nombre}`)
    );
  }
  get correoUsuario$(): Observable<string | undefined> {
    return this.authUser$.pipe(map((usuario) => usuario?.correo));
  }
  get rolUsuario$(): Observable<string | undefined>{
    return this.authUser$.pipe(map((usuario)=> usuario?.role))
  }

  salir(): void{
    this.servicio.logout();
  }
}
