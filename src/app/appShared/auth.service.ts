import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean =false;//isLoggedIn est la variable qui en fonction de sa valeur signalera si un utilisateur est connecté ou pas. c'est dire qu'à chaque fois qu'on voudra si un user est connectê ou pas on devra venir verifier sa valeur.
  redirectUrl!:string;
  loggedName!:string;
  //name:string='Louise'
  //password:string='louise'
  //  cette fonction verifie si les identifiants entrés sont correcects et modifient la valeur de isLoggedIn
  login(name:string,password:string):Observable<boolean>{// login retourne un observable parce qie dans la vrai vie elle ira verifier les données dans un serveur
    //const isLoggedIn=(name == this.name&& password==this.password) // autre methode 
    if(name == 'Louise' && password=='louise'){
     this.isLoggedIn=(name == 'Louise' && password=='louise');//isLoggedIn ici est differente de isLoggedIn declaré hors de la fonction. 
    //son role est de garder le resultat de la comparaison faite sur les identifiants entrés par l'utilisateur  
    this.loggedName='Admin principal';
    }else if(name == 'Marie' && password=='marie'){
      this.isLoggedIn=(name == 'Marie' && password=='marie');//isLoggedIn ici est differente de isLoggedIn declaré hors de la fonction. 
     //son role est de garder le resultat de la comparaison faite sur les identifiants entrés par l'utilisateur  
     this.loggedName='User principal';
     }
    

    return of(this.isLoggedIn).pipe( //of transforme en observable le resultat de la comparaison faite sur les identifiants entrés
      delay(1000), // delay fait retarder la donnée d'une seconde(1000ms) pour simuller le fonctionnement dans la vraie vie 
      tap(isLoggedIn=>this.isLoggedIn=isLoggedIn) //tap est utilisé pour pour attribuer à isLoggedIn externe la valeur de isLoggedIn interne
    )
  }

  logout(){
    this.isLoggedIn=false;
  }

  constructor() { }
}
