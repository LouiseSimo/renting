import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';

const flatRoutes : Routes =[
  //{path: 'tenants/:id', component: TenantDetailsComponent, canActivate :[FlatDetailGuard]},
  {path: 'tenants/:id', component: TenantDetailsComponent},
  {path: 'tenants', component: TenantListComponent},
  {path: 'tenants/:id/edit', component: TenantEditComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(flatRoutes)
  ]
})
export class TenantRoutingModule { }
