import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlatDetailsComponent } from '../flats/flat-details/flat-details.component';
import { FlatListComponent } from '../flats/flat-list/flat-list.component';
import { FlatDetailGuard } from '../flats/flat-details/flat-detail.guard';
import { FlatEditComponent } from '../flats/flat-edit/flat-edit.component';
import { FlatEditGuard } from '../flats/flat-edit/flat-edit.guard';
import { authGuard } from '../_appShared/auth.guard';
import { AdminComponent } from './admin.component';
import { TodosComponent } from '../todos/todos.component';
import { TenantListComponent } from '../tenants/tenant-list/tenant-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FlatsComponent } from '../flats/flats.component';
import { FlatModule } from '../flats/flat.module';


const adminRoutes : Routes =[ // cette constante garde toutes les routes qui vont être utilisées dans le module Admin
  {path:'', component: AdminComponent,// AdminComponent est le component qui va s'afficher quand on va arriver dans ce module
  children: [ // children permet le lister toutes les routes qui devront s'afficher dans le router-outlet de la page admin
  //NB: si l'un de ces chemin est declaré ailleur celui là aura la priorité??? je sais pas mais quand j'ai laissé ailleur celui ci  n'etais pas considere
    {path: ' ', component: AdminHomeComponent, }, // TodosComponent est le component qui va s'afficher par defaut dans le router-outlet de la page admin
    //{path:'flats', loadChildren: () => import(`../flats/flat.module`).then(m => m.FlatModule) },


    {path:'flats', loadChildren: () => import(`../flats/flat.module`).then(m => m.FlatModule) },

    
    // {path: 'flats', component: FlatsComponent,
    //   children:[
    //     {path: '', component: FlatListComponent, outlet:'flats'},
    //     {path: ':id', component: FlatDetailsComponent, outlet:'flats'},
    //     // Les  :id  spécifient que ce qui se trouvera après  flats/ correspondra à un paramètre qui s'appellera  id.
    //     {path: ':id/edit', component: FlatEditComponent,outlet:'flats'},
    //         {path: 'tenants', component: TenantListComponent, },
     
    //   ]

    //  }, // s'affichera dans le router-outlet de la page admin quand n'importe où dans l'application on entrera cette route??
     {path: 'flat/:id', component: FlatDetailsComponent,},
    
    {path: 'tenants', component: TenantListComponent, },
    {path: '**', redirectTo : ' ', pathMatch:'full'}, //ceci est la route avec l'espace ' '

  ],
 },
 //canActivate :[authGuard]

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(adminRoutes)
    
  ],
  exports: [
    RouterModule
    
  ]

})
export class AdminRoutingModule { }
