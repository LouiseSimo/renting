import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatDetailsComponent } from './flat-details/flat-details.component';
import { FlatEditComponent } from './flat-edit/flat-edit.component';
import { FlatEditGuard } from './flat-edit/flat-edit.guard';
import { authGuard } from '../_appShared/auth.guard';
import { FlatDetailGuard } from './flat-details/flat-detail.guard';
import { FlatsComponent } from './flats.component';

// CE  MODULE  DE ROUTE  N'EST PAS ENCORE UTILISÉ DANS CETTE APPLICATION, s'il n'est pas utilise jusqu'à la gin du projetil sera supprimé car inutile


const flatRoutes: Routes = [
  // {
  //   path: '', component: FlatsComponent,
  //   children: [
  //     //  Les  :id  spécifient que ce qui se trouvera après  flats/ correspondra à un paramètre qui s'appellera  id.
  //     { path: '', component: FlatListComponent, outlet: 'flats' },
  //     // {path: 'flats/:id', component: FlatDetailsComponent, canActivate :[FlatDetailGuard]},
  //     // {path: 'flats/:id/edit', component: FlatEditComponent, canDeactivate:[ FlatEditGuard],canActivate :[authGuard]},
  //     { path: 'flats/:id', component: FlatDetailsComponent, outlet: 'flats' },
  //     { path: ':id/edit', component: FlatEditComponent, outlet: 'flats' }
  //   ], 
  // }
]




@NgModule({
  declarations: [],
  imports: [

    RouterModule.forChild(flatRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FlatRoutingModule { }
