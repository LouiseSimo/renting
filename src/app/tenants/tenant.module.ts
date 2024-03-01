import { NgModule } from '@angular/core';

import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { TenantEditComponent } from './tenant-edit/tenant-edit.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { SharedModule } from '../appShared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TenantEditComponent,
    TenantListComponent,
    TenantDetailsComponent
  ],
  imports: [
    SharedModule,
    //FormsModule
    ReactiveFormsModule
  ]
})
export class TenantModule { }
