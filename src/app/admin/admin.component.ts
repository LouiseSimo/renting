import { Component } from '@angular/core';
import { AuthService } from '../appShared/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  constructor(private authService:AuthService){}

  adminName:string=this.authService.loggedName;

 
}
