import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_appShared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message:string='you are logged out(Louise/louise)';
  userName!:string;
  password!:string;
  auth!:AuthService;
  public title ="RENTING MANAGEMENT APP"

  constructor(private authService:AuthService,private router: Router){}

  ngOnInit(): void {
    this.userName=''
    this.password=''
    this.auth=this.authService
  }

  setMessage(){
    if(this.auth.isLoggedIn){
      this.message='You are connected.';
    }else{
      this.message='Name or password incorrect, please try again.';
    }

  }
  login(){// cette methode se charge d'appeller le service pour lui demander si les informations entrees par le user sont correctes.
    this.message='Trying to connect...';// message qui s'affiche à l'utilisateur pendant qu;on interroge le serveur à l'aide du service qu'on appelle
    this.auth.login(this.userName, this.password).subscribe((isLoggedIn:boolean)=>{
      this.setMessage(); // le message affiche changera en fonction de la valeur de isLoggedIn qu'on aura recu 
      console.log(this.message)
      if(isLoggedIn && this.userName=='Louise'){
        this.router.navigate(['/admin'])
      }else if(isLoggedIn && this.userName=='Marie'){
        this.router.navigate(['/user'])
      }else{
        this.password='';
        this.router.navigate(['/login'])
      }
      
      
    })

  }

  logout(){

    this.auth.logout();
    this.message='you\'re disconnected';
  }

}
