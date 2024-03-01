import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReplaceComma } from './pipes/replace-comma.pipe';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';



@NgModule({
  declarations: [
    ReplaceComma,
    
   
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReplaceComma,
    RouterModule,
    
  ]
})
export class SharedModule { }
