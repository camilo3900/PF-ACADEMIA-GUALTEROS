import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login.interface';
import { environment } from 'src/environments/environment.local';
import { Usuario } from '../models/usuario.class';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<Usuario | null>(null);
  public authUser = this._authUser$.asObservable();
  constructor(private httpClient: HttpClient, private router: Router) { 

  }



  login(payload: Login): void {
    this.httpClient
    .get<Usuario[]>(`${environment.baseUrl}/usuarios?${payload.email}&password=${payload.password}`
    )
    .subscribe({
      next:(response) => {
        if(!response.length){
          alert('Invalid username or password')
        }else{
          const authUser = response[0];
          this._authUser$.next(authUser);//se emite el usuario autenticado de la db
          if(authUser.token !== undefined){/* Se valida que el token exista */
            localStorage.setItem('token', authUser.token)
          }else{
            localStorage.setItem('token', "NO HAY TOKEN")
          }
          
          this.router.navigate(['dashboard', 'home']); 
        }
      },
      error: (err) => {
        alert('Error de conexion')
      }
    });

    
  }


  verifyToken(): Observable<boolean> {
    return this.httpClient
    .get<Usuario[]>(`${environment.baseUrl}/usuarios?token=${localStorage.getItem('token')}`
    ).pipe(
      map((res) => {
        if(!res.length) {
          return false;
        } else {
          
          return true;
        }
      })
    );
  }

  logout():void{
    localStorage.removeItem('token');//Se elimina el token del localStorage
    this._authUser$.next(null);//Se define el usuario nulo
    this.router.navigate(['auth', 'login']);
  }
}
