import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
//import { of } from 'rxjs';


import {Hero} from "../heroes/Ihero";
import {HeroesAll} from "../heroes/mock-hero";
import {MessageService} from "../component.messages/message.service";

// @Injectable({
//     providedIn: 'root',
//   })
@Injectable()
export class HeroService{
    
    getHerroesAll():Observable<Hero[]> {
        this.MessService.add("first text for message");
        return of(HeroesAll);
    }

    constructor(private MessService:MessageService){}
}