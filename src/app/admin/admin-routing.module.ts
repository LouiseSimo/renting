import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FlatDetailsComponent } from '../flats/flat-details/flat-details.component';
import { FlatListComponent } from '../flats/flat-list/flat-list.component';
import { FlatDetailGuard } from '../flats/flatShared/guards/flat-detail.guard';
import { FlatEditComponent } from '../flats/flat-edit/flat-edit.component';
import { FlatEditGuard } from '../flats/flatShared/guards/flat-edit.guard';
import { authGuard } from '../appShared/auth.guard';


const flatRoutes : Routes =[
  {path: 'flats/:id', component: FlatDetailsComponent, canActivate :[FlatDetailGuard]},
  {path: 'flats', component: FlatListComponent, },
  {path: 'flats', loadChildren: () => import(`../flats/flat.module`).then(m => m.FlatModule) },
  {path: 'flats/:id/edit', component: FlatEditComponent, canDeactivate:[ FlatEditGuard],canActivate :[authGuard]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(flatRoutes)
    
  ]
})
export class AdminRoutingModule { }
