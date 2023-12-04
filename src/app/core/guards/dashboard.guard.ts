import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const dashboardGuard: CanActivateFn = (route, state) => {

  /* let ingresar: boolean = true; */
  const router = inject(Router);
  console.log("dashboard guarsd");
  
  return true;
/*   return router.createUrlTree(['/dashboard']); */
};
