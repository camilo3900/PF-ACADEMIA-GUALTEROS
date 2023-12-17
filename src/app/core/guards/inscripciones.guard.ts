import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

export const inscripcionesGuard: CanActivateFn = (route, state) => {
  const servicio = inject(AuthService);
  const router = inject(Router);
  return servicio.authUser.pipe(map((v)=>v?.role!='USUARIO'? true : router.createUrlTree(['/dashboard/home'])))

 
  
};
