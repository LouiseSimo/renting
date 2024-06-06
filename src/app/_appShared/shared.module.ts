import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReplaceComma } from './pipes/replace-comma.pipe';
import { RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';



@NgModule({
  declarations: [
    ReplaceComma,
    PersonalInformationComponent,
    
   
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
