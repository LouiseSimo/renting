import { inject } from '@angular/core';
import {CanActivateFn, Router, } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state):boolean => {
  const router =inject(Router);// inject est utilisee pour l'injection des dependances, apparement ce n'est pas permis d'utiliser le constructuer
  const authService =inject(AuthService);

  if(authService.isLoggedIn){return true}
    console.log(' the guard redirected you to the login page because you\'re not yet connected')
    router.navigate(['/login'])
    return false;

}
