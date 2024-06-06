import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlatModule } from '../flats/flat.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../_appShared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FlatRoutingModule } from '../flats/flat-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FlatData } from '../flats/api/flat.data';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { TodosComponent } from '../todos/todos.component';





@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    TodosComponent
  ],
  imports: [
    //CommonModule,
    SharedModule,
    FlatModule, 
    AdminRoutingModule,
    InMemoryWebApiModule.forFeature(FlatData),
  ],
  exports: [
    // SharedModule,
    //FlatModule, 
    // AdminRoutingModule,
    // FlatRoutingModule
  ]

})
export class AdminModule { }
