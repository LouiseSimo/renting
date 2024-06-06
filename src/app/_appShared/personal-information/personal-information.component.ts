import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFlat } from 'src/app/flats/flat';
import { FlatListService } from 'src/app/flats/services/flat-list.service';
import { PersonalInformationService } from './personal-information.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {


  public info = {
    id: 1,
    name: "Marie Jeanne",
    telephone: 1233456,
    cni: 900.00,
    email:"louisesimo25@gmail.com",
    flatName:"F1",
    imageUrl:"../assets/img/hotel-room.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    addedDate: "12/10/1999"
}

  constructor(private route: ActivatedRoute, // le service qui va nous aider à capturer la route et prendre la valeur dont on a besoin
              private personalInformationService : PersonalInformationService,
              private router: Router){}

  // ngOnInit(){
  //   const id: number = +this.route.snapshot.paramMap.get('id')!;
  //   console.log("received id from the Url:", id );

  //   this.personalInformationService.getFlats().subscribe((flatList: IFlat[]) =>{
  //     this.flat=flatList.find(flat => flat.id == id);
  //     console.log("flat à afficher dans ce component", this.flat)
  //   })
  // }

  backToList(): void {
    this.router.navigate(['/flats']);

  }
}
