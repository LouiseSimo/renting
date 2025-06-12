import { Component, OnInit } from '@angular/core';
import { IFlat } from '../flat';
import { FlatListService } from '../services/flat-list.service';
import { BorderCardDirective } from '../../_appShared/directives/border-card.directive';
import { Router } from '@angular/router';


@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styleUrls: ['./flat-list.component.scss']
})
export class FlatListComponent implements OnInit {

  public title ="Flat list ";

  public flatList: IFlat[]=[];

  public isFree !:boolean;

  private _flatFilter ="";

  public filteredFlats: IFlat[] =[];

  public errMsg !: string;

  constructor ( private flatListService : FlatListService,
                private router:Router
  ){}



  ngOnInit(){
    this.flatListService.getFlats().subscribe(
      {
        next: flats => {
          console.table(flats)
          this.flatList = flats;
          this.filteredFlats = this.flatList;
        },
        error: err => this.errMsg = err
      }
    );
    
    this.flatFilter ='';
  }

  public get flatFilter(): string{
    return  this._flatFilter;
  }

  public set flatFilter(criteria:string){
    this._flatFilter = criteria;
    this.filteredFlats = this.flatFilter? this.filterFlats(this.flatFilter):this.flatList;
    //this.flatFilter? plushaut represente le flatFilter defini avec la fonction get
  }

  private filterFlats(criteria:string):IFlat[]{
     criteria = criteria.toLowerCase();
    const list= this.flatList.filter (
      (flat: IFlat) => flat.flatName.toLocaleLowerCase().indexOf(criteria)!= -1
    );
    return list;
  }

  public showFree():void{

    // for (let flat of this.flatList){
    //   this.isFree=!this.isFree;
    // }
    this.isFree=!this.isFree;
    
  }

  // onViewFlat(){
  //   //this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  //   this.router.navigateByUrl(`admin/flats/0/edit`);
  // }



}
