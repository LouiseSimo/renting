import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatListService } from '../flatShared/services/flat-list.service';
import { IFlat } from '../flatShared/models/flat';

@Component({
  selector: 'app-flat-details',
  templateUrl: './flat-details.component.html',
  styleUrls: ['./flat-details.component.scss']
})
export class FlatDetailsComponent {

  public flat :IFlat | undefined;

  constructor(private route: ActivatedRoute, 
              private flatListService: FlatListService,
              private router: Router){}

  ngOnInit(){
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    console.log("received id from the Url:", id );

    this.flatListService.getFlats().subscribe((flatList: IFlat[]) =>{
      this.flat=flatList.find(flat => flat.id == id);
      console.log("flat à afficher dans ce component", this.flat)
    })
  }

  backToList(): void {
    this.router.navigate(['/flats']);

  }

}
