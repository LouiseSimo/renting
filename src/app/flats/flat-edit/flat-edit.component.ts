import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatListService } from '../flatShared/services/flat-list.service';
import { IFlat } from '../flatShared/models/flat';

@Component({
  selector: 'app-flat-edit',
  templateUrl: './flat-edit.component.html',
  styleUrls: ['./flat-edit.component.scss']
})
export class FlatEditComponent {


  public  flatForm!: FormGroup;// flatForm est mis à jour en temps reel grace au data binding fait depuis le formulaire
  public flat!: IFlat;
  public pageTitle!:string;
  public errorMessage!:string | null;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router:Router,
              private flatService:FlatListService){}
  // Affichage initial de notre page dans le cas où on clique sur "add a new flat" 
  ngOnInit(): void{
    // flatForm est l'instance du model de notre formulaire constitué des differents champs qu'il contiendra ainsi que leur validators 
    //NB tous les champs dont les valeurs auront besoin d'être enregistré doivent enregistrer la valeur de leur formControlName dans ce modele 
    this.flatForm = this.fb.group({
      flatName:['', Validators.required],
      price:['', Validators.required], 
      description:['']
    });
    console.log('values of the initial formular formGroup',this.flatForm.value);  
    console.log('status of the initial formular formGroup',this.flatForm.status);
    console.table(this.flatForm.value)
  //Capture de l'Identifiant de l'appartement qui arrive and correspondingly l'affichage
  // Nb: cette partie de code s'execute directement au chargement de la page d'edition d'un flat.
    this.route.paramMap.subscribe(params =>{
      const id = +params.get('id')!;

      console.log('received flat id ', id)
      this.getSelectedFlat(id);
      // la fonction getSelectedFlat() se charge de recuperer un flat à partir de son Id qui a ete capture a l'aide du service 

    }) 

  }
  public hideError():void{
    this.errorMessage=null;
  }

  public getSelectedFlat(id:number):void{
    this.flatService.getFlatById(id).subscribe((flat:IFlat) => { //subscribe ici recupere le flat de type Iflat que retourne la fonction getFlatById et l'affiche en console
      console.log('Flat values correspondind to the received id', flat);
      console.table(flat)
      
      this.displayFlat(flat);
    });

  }
  //displayFlat permet d'afficher le flat reçu dans la page d'edition. 
  public displayFlat(flat:IFlat):void{
    this.flat = flat;
    if(this.flat.id ===0){
      this.pageTitle = 'Create a new flat';
    }else{
      this.pageTitle ='Modify Flat '+this.flat.flatName;
    }
    //patchValue permet de donner les valeurs aux imputs d'un formulaire en passant par leur FormContolName
    this.flatForm.patchValue({
     flatName: this.flat.flatName,
     price: this.flat.price,
     description: this.flat.description
     
    });
  }

  public saveFlat():void{
    console.log('the new values of our flat after edition are :',this.flatForm.value);

    if(this.flatForm.valid){
      if(this.flatForm.dirty){ //flatForm ici contient les valeurs qui viennent du formulaire grace au dataBinding
        const flat:IFlat={
          ...this.flat,
          //...this.flatForm.value
        };
        if(flat.id == 0){
          //createFlat retourne un element de type Observable, raison pour laquelle elle appelle la function subscribe sans laquelle 
          //la creation ne sera pas effective. next est une fonction qui dit la prochaine action à mener apres avoir utilisé l'observable.  
          this.flatService.createFlat(flat).subscribe({ 
            next:createdflat =>{//next regroupe l'ensemble des fonctions à executer apres avoir recu l'observable
              console.log('values of the created flat',createdflat),
              console.table(createdflat)
              this.saveCompleted()
            },
            error:(err)=> this.errorMessage=err
          });
        }else{
          this.flatService.updateFlat(flat).subscribe({
            //next:() => this.saveCompleted(),
            next:updatedFlat=> {
            console.log('values of the updated flat',updatedFlat),
            console.table(updatedFlat),
              this.saveCompleted()
            },
            error:(err)=> this.errorMessage=err
          });
        }
      }
    } 
    console.log(this.flatForm.status);
  }

 public saveCompleted():void{
  this.flatForm.reset();
  this.router.navigate(['/flats']);
 }

 public deleteFlat():void{
  if(confirm('Do you really want to delete this flat'+this.flat.flatName +'?')){
    this.flatService.deleteFlat(this.flat.id!).subscribe({
      //next:() => this.saveCompleted(),
      next:deletedFlat =>{
        console.log('values of the deleted flat',deletedFlat),
        console.table(deletedFlat),
        this.saveCompleted()
      } 
    });
  }
 }

}
