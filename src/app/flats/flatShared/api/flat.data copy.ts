import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IFlat } from '../models/flat';

@Injectable({
    providedIn: 'root',
  })

export class FlatDataC implements InMemoryDbService{
    createDb():Record<string,IFlat[]> {
        const flat:IFlat[]=[
            {
                id: 1,
                "flatName": "F1 fake",
                "description": "this is the F1 flat description",
                "price": 900.00,
                "imageUrl":"../assets/img/hotel-room.jpg",
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

        return{flat};


    }
}