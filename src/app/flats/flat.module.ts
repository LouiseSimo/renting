import { NgModule } from '@angular/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatDetailsComponent } from './flat-details/flat-details.component';
import { SharedModule } from '../_appShared/shared.module';
import { FlatEditComponent } from './flat-edit/flat-edit.component';
import { FlatData } from './api/flat.data';
import { FlatRoutingModule } from './flat-routing.module';
import { FlatsComponent } from './flats.component';


// CE  MODULE  DES FLATS N'EST PAS ENCORE UTILISÉ DANS CETTE APPLICATION, s'il n'est pas utilise jusqu'à la gin du projetil sera supprimé car inutile


@NgModule({
    declarations: [
        FlatsComponent,
        FlatListComponent,
        FlatDetailsComponent,
        FlatEditComponent,
        FlatsComponent
        
        
        
    ],
    imports: [
        SharedModule,
        FlatRoutingModule,
        InMemoryWebApiModule.forFeature(FlatData),
        
    ],
    exports: [
        FlatListComponent,
        FlatDetailsComponent,
        FlatEditComponent,
        FlatRoutingModule,
        
        
        
    ]
        
})

export class FlatModule { }
