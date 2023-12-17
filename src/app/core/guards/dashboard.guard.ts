import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const servicio = inject(AuthService);

  return servicio
  .verifyToken()
  .pipe(
    map((usuarioAutenticado) => 
        usuarioAutenticado ? true : router.createUrlTree(['/auth/login'])
    )
  );
};
