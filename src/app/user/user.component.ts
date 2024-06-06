import { Component } from '@angular/core';
import { AuthService } from '../_appShared/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(private authService:AuthService){}

  userName:string=this.authService.loggedName;

}
