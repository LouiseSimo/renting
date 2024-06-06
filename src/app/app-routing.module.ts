import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { FlatModule } from './flats/flat.module';
import { FlatListComponent } from './flats/flat-list/flat-list.component';
import { FlatDetailsComponent } from './flats/flat-details/flat-details.component';
import { FlatEditComponent } from './flats/flat-edit/flat-edit.component';
import { PersonalInformationComponent } from './_appShared/personal-information/personal-information.component';

const appRoutes: Routes =[
  {path:'login', component: LoginComponent}, 
  // {path:'user', component: UserComponent,
  // children:[
  //   {path: 'flats', component: FlatListComponent, },
  //   {path: 'info', component: PersonalInformationComponent, },
  //   {path: 'flat/:id', component: FlatDetailsComponent, outlet:'flats'},
  //   // Les  :id  spécifient que ce qui se trouvera après  flats/ correspondra à un paramètre qui s'appellera  id.
  //   {path: 'flat/:id/edit', component: FlatEditComponent,outlet:'flats'}     
  // ]
  // },
  //{path:'admin', component: AdminComponent}, 
  {path:'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },
  //{path:'flats', loadChildren: () => import(`./flats/flat.module`).then(m => m.FlatModule) },
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
