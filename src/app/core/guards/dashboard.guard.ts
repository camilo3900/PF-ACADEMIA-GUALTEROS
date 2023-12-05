import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {

  /* let ingresar: boolean = true; */
  const router = inject(Router);
  const servicio = inject(AuthService);
  console.log("dashboard guarsd");

  return servicio
  .verifyToken()
  .pipe(
    map((usuarioAutenticado) => 
        usuarioAutenticado ? true : router.createUrlTree(['/auth/login'])
    )
  );
/*   return router.createUrlTree(['/dashboard']); */
};
