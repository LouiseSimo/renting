import { NgModule } from '@angular/core';

import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { SharedModule } from '../_appShared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TenantRoutingModule } from './tenant-routing.module';
//import { FormsModule } from '@angular/forms';

// CE  MODULE  DES TENANTS N'EST PAS ENCORE UTILISÉ DANS CETTE APPLICATION, s'il n'est pas utilise jusqu'à la gin du projetil sera supprimé car inutile



@NgModule({
  declarations: [
    TenantEditComponent,
    TenantListComponent,
    TenantDetailsComponent
  ],
  imports: [
    SharedModule,
    //FormsModule
    ReactiveFormsModule,
    TenantRoutingModule
  ]
})
export class TenantModule { }
