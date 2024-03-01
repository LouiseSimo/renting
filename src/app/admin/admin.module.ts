import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatModule } from '../flats/flat.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../appShared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { FlatRoutingModule } from '../flats/flat-routing.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    //FlatModule, 
    AdminRoutingModule,
    RouterModule
    
  ],
  exports: [
    //SharedModule,
     //FlatModule, 
    // AdminRoutingModule,
     //FlatRoutingModule
   
     
   ]
  
})
export class AdminModule { }
