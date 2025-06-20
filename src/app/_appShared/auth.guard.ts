import { inject } from '@angular/core';
import {CanActivateFn, Router, } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state):boolean => {
  const router =inject(Router);// inject est utilisee pour l'injection des dependances, apparement ce n'est pas permis d'utiliser le constructuer
  const authService =inject(AuthService);

  if(authService.isLoggedIn){return true}

  router.navigate(['/login'])
  return false;



  // const user = this.authService.userValue;
  //       if (user) {
  //           // check if route is restricted by role
  //           if (route.data.roles && route.data.roles.indexOf(user.role) === -1) {
  //               // role not authorised so redirect to home page
  //               this.router.navigate(['/']);
  //               return false;
  //           }

  //           // authorised so return true
  //           return true;
  //       }

  //       // not logged in so redirect to login page with the return url
  //       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //       return false;
    

}
