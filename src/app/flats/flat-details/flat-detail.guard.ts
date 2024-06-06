import { inject } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivateFn, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

export const FlatDetailGuard: CanActivateFn = (route: ActivatedRouteSnapshot, 
                                               state: RouterStateSnapshot):boolean => {
  // console.log('route activable: ',route);
  //  const router =inject(Router); // inject est untilisee pour l'injection des dependances, apparement ce n'est pas permis d'utiliser le constructuer
   
  //   const id = +route.url[1].path;
  
  //   if (isNaN(id) || id <= 0 || id >=5){
  //     alert('Flat inconnu, veillez retourner en zone securisée parce que ici vous etes en danger');
  //     router.navigate(['/flats']);
  //     return false;
  //   }

  return true;
};


// export class FlatDetailGuard implements CanActivate{

//  constructor(private router: Router){}


//   canActivate(route: ActivatedRouteSnapshot, 
//               state: RouterStateSnapshot):boolean  {

//     console.log('route activable: ',route);
   
//     const id = +route.url[1].path;
  
//     if (isNaN(id) || id <= 0 || id >=5){
//       alert('Flat inconnu, veillez retourner en zone securisée parce que ici vous etes en danger');
//       this.router.navigate(['/flats']);
//       return false;
//     }
  
//     return true;
//   };

// }
