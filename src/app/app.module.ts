import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlatModule } from './flats/flat.module';
import { FlatRoutingModule } from './flats/flat-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { TenantRoutingModule } from './tenants/tenant-routing.module';
import { TenantModule } from './tenants/tenant.module';
import { AdminComponent } from './admin/admin.component';
import { BorderCardDirective } from './flats/flatShared/directives/border-card.directive';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos/todos.component';
registerLocaleData(localeFr,'fr' );




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   
    BorderCardDirective,
    TodosComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    //FlatRoutingModule,
    //TenantRoutingModule,
    AppRoutingModule,
    
    //FlatModule,
    //TenantModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
