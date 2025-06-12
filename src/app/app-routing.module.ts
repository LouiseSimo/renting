import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PersonalInformationComponent } from './_appShared/personal-information/personal-information.component';

const appRoutes: Routes =[
  {path:'login', component: LoginComponent}, 
  {path:'user', component: UserComponent,
  children:[
    {path: '', component: PersonalInformationComponent, },      
    {path: 'info', component: PersonalInformationComponent, },      
  ]},

  {path:'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: '**', redirectTo : 'login', pathMatch:'full'},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),   
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
