import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './todos/todos.component';
import { BorderCardDirective } from './_appShared/directives/border-card.directive';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UserComponent } from './user/user.component';
import { AdminModule } from './admin/admin.module';
registerLocaleData(localeFr,'fr' );





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    BorderCardDirective, //CETTE DIRECTIVE NE FONCTIONNE PAS ENCORE 
    //TodosComponent, 
    UserComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
