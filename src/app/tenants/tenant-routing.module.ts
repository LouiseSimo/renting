import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';

const tenantRoutes : Routes =[
  //{path: 'tenants/:id', component: TenantDetailsComponent, canActivate :[FlatDetailGuard]},
  {path: 'tenants/:id', component: TenantDetailsComponent},
  {path: 'tenants', component: TenantListComponent},
  {path: 'tenants/:id/edit', component: TenantEditComponent},
]

// CE  MODULE  DE ROUTES N'EST PAS ENCORE UTILISÉ DANS CETTE APPLICATION, s'il n'est pas utilise jusqu'à la gin du projetil sera supprimé car inutile

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(tenantRoutes)
  ]
})
export class TenantRoutingModule { }
