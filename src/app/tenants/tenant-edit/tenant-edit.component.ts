import { Component } from '@angular/core';
import { Tenant } from '../tenant';
//import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tenant-edit',
  templateUrl: './tenant-edit.component.html',
  styleUrls: ['./tenant-edit.component.scss']
})
export class TenantEditComponent {

  public registerForm !:FormGroup;

  public tenant:Tenant =new Tenant();

  public pageTitle!:string;

  constructor(private fb:FormBuilder){}

   ngOnInit(): void{

    this.registerForm = this.fb.group({
      firstName :['',[Validators.required,Validators.minLength(4)]],
       lastName :['',[Validators.required,Validators.maxLength(14)]],
       number : ['',[Validators.required , Validators.minLength(9),Validators.maxLength(9)]],
       cniNumber: ['',[Validators.required , Validators.minLength(9),Validators.maxLength(9)]],
       email:  ['',[Validators.required, Validators.email]],
       moreInfoId: false,
       description:'',
    })
  }

  public saveTenant(){
    console.log(this.registerForm);
    console.log('valeur:', JSON.stringify(this.registerForm.value));
    console.log('heyyy');
  }

  public fillFormData():void{
    this.registerForm.setValue({ // use patchValue to fill just some imputs, not all
      firstName : 'Tenant',
      lastName :  'New' ,
      number : '000000000',
      cniNumber: '1234567890',
      email:  'tnew@gmail.com',
      moreInfoId: true,
      description:'',
    })
  }
  // public saveData(registerform: NgForm){
  //   console.log(registerform.form);
  //   console.log('valeur:', JSON.stringify(registerform.value));
  //   console.log('heyyy');
  // }

}
