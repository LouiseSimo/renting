import { Injectable } from "@angular/core";
import { IFlat } from "../models/flat";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";


@Injectable({
    providedIn: 'root',
  })

export class FlatListService {

    // ici on met la liste des fontions qui pourrons etrre appelle3es par les 
    // composantes qui auraont besoin des servives de ce servce. 
    // par exemple la fntion getflar defineie ici sera appelllee par tout composant 
    // qui a beoisn que le sevice flat list service lui rende un service qui sera de li donner la lisre des flats
    // pareil pour les autres fonctions


    // La pluspart des fonctions de ce service prennent leur données dans un serveur et pour celà utilisent
    // les fonctions du service httpClient(get, put, post), raison pour laquelle elles retournent des observables.

    private readonly FLAT_API_URL ='api/flats';

    constructor(private http : HttpClient){}
    // getFlats() utilise la fonction get du service httpClient , et cette fontion retourne une donnée de type 'Observable'  
    //NB :  pipe est la fonction qui permet de faire des operations sur un observable.
    public getFlats(): Observable<IFlat[]>{
        return this.http.get<IFlat[]>(this.FLAT_API_URL).pipe(

          tap (flats =>console.log("liste des flats recus de l'api :", flats)), 
          // tap est comme le console.log des observables, son but ici est de recuperer tout element de type observable ainsi console.log pourra le recuperer pour l'afficher en console
          catchError((error)=>this. handleError(error))//catchError est une fonction qui s'appelle sur l'observable que va retourner la fonction get pour 
          //verifier si elle contient des erreurs.Si c'est le cas, il les recupere et les traite à l'aide de la fonction handleError.
        )
    }

    public getFlatById(id:number):Observable<IFlat>{

      const url= this.FLAT_API_URL +'/'+ id;
      if(id === 0){
        return of(this.getDefaultFlat())// of permet de transformer le valeur qu'il a en paramètre en un flux de donnee(observable)
      }
      return this.http.get<IFlat>(url).pipe(
        tap(flat=>console.log("Flat recu de l'api à partir de son id:",flat)),
        catchError(this.handleError)// comment s'explique cette facon d'appeller handleError sans lui passer ses parametres?
      );
    }

    public createFlat(flat :IFlat):Observable<IFlat>{// l'observable retourné ici est le flat qu'on a crée
      // on cree un autre flat avec les valeurs de celui qu'on a pris en paramètre et on les modifie au besoin.
      flat={
        ...flat,//permet de recuperer les valeurs du flat pris en parametre
        imageUrl:"../assets/img/the-interior.jpg",// modifie l'attribut imageUrl de ce flat
        id:null // modifie l'attribut id de ce flat
      }
      return this.http.post<IFlat>(this.FLAT_API_URL,flat).pipe(
        tap((flattttt)=>{
          console.log("createdflat issssssssss:",flattttt),
          console.table(flattttt)
        }
          ),
        
        catchError(this.handleError)//
      );

    }
    
    public updateFlat(flat:IFlat):Observable<IFlat>{

      //const url= '$[this.FLAT_API_URL]/${this.flat.id}'
      const url= this.FLAT_API_URL+'/' +flat.id
      // url est le chemin qui nous mènera au plat qu'on veut modifier .
      // la fontion put placera le flat pris en paramètre à l'adressse donnee par url
      return this.http.put<IFlat>(url,flat).pipe( // NB dans l'api in-memory-web, put retourne 'null' plutot qu'un observable(c'est un cas particulier pour cet API, dans la vie reelle ce n'est pas le cas.)
        tap((updatedFlat)=>console.table(updatedFlat)),
        catchError(this.handleError)
      );

    }

    public deleteFlat(id:number){
      const url=this.FLAT_API_URL+'/'+id
      return this.http.delete<IFlat>(url).pipe( // NB dans l'api in-memory-web, delete retourne 'null' plutot qu'un observable(c'est un cas particulier pour cet API, dans la vie reelle ce n'est pas le cas.)
        tap((deletedFlat)=>console.table(deletedFlat)),
        catchError(this.handleError)
      );
    }
    
    private getDefaultFlat():IFlat{
      return{
        id: 0,
      flatName: "",
      description: "",
      price: null,
      imageUrl:"",
      isFree:false
      }
    }


    private handleError(error: HttpErrorResponse) {
      let errorMessage:string;
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
        errorMessage = 'An error occurred:',error.error
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      errorMessage=`Backend returned code ${error.status}, body was: `, error.error;

      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'+'/n'+errorMessage));
    }

}