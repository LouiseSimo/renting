import { NgModule } from '@angular/core';

import { InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FlatListComponent } from './flat-list/flat-list.component';
import { FlatDetailsComponent } from './flat-details/flat-details.component';
import { SharedModule } from '../appShared/shared.module';
import { FlatEditComponent } from './flat-edit/flat-edit.component';
import { FlatData } from './flatShared/api/flat.data';
import { FlatRoutingModule } from './flat-routing.module';




@NgModule({
    declarations: [
        FlatListComponent,
        FlatDetailsComponent,
        FlatEditComponent,
        
    ],
    imports: [
        SharedModule,
        FlatRoutingModule,
        InMemoryWebApiModule.forFeature(FlatData)
        
    ],
    exports: [
        FlatListComponent,
        FlatDetailsComponent,
        FlatEditComponent,
        
    ]
        
})

export class FlatModule { }
