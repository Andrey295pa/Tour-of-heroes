import {Component, OnInit} from "@angular/core";
import {Hero} from "../heroes/Ihero";
import {HeroService } from "../service/hero.servise";

@Component({
    moduleId:module.id,
    selector:'dasboard',
    templateUrl:'/app/dashboard/dashboard.html',
    styles:[``]
})
export class DashboardComponenet implements OnInit{

heroes:Hero[]=[];

constructor (private heroService:HeroService){}

getHero():void{
    this.heroService.getHerroesAll()
    .subscribe(her => this.heroes = her.slice(1, 5));
}
    ngOnInit(): void {
       
    }


}