import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TodosComponent } from './todos/todos.component';

const appRoutes: Routes =[
  {path:'login', component: LoginComponent},
  {path:'todos', component: TodosComponent},
  {path:'admin', component: AdminComponent},
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
