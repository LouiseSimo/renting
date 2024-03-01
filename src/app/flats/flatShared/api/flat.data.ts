import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IFlat } from '../models/flat';

@Injectable({
    providedIn: 'root',
  })

export class FlatData implements InMemoryDbService{
    createDb():Record<string,IFlat[]> {
        const flats:IFlat[]=[
            {
                id: 1,
                "flatName": "F1",
                "description": "this is the F1 flat description",
                "price": 900.00,
                "imageUrl":"../assets/img/indoors.jpg",
                "isFree":true
            },
            {
                id: 2,
                flatName: "F2",
                description: "this is the F2 flat description",
                price: 800.00,
                imageUrl:"../assets/img/hotel-room.jpg",
                isFree:true
            },
            {
                id: 3,
                flatName: "F3",
                description: "this is the F3 flat description",
                price: 100000,
                imageUrl:"../assets/img/the-interior.jpg",
                isFree:true
            },
            {
                id: 4,
                flatName: "F4",
                description: "this is the F4 flat description",
                price: 60000,
                imageUrl:"../assets/img/window.jpg",
                isFree:true
            }
        ];

        return{flats};


    }

    genId(flats:IFlat[]):number{
        return flats.length > 0 ? Math.max(...flats.map(flat => flat.id!))+1:1;
        // x?then y :else then z   c'est la methode utilisée
    }
}