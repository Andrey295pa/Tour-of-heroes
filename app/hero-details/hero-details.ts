
import {Component,Input} from "@angular/core";
import {Hero} from "../heroes/Ihero"
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {HeroService} from "../service/hero.servise";
import { OnInit } from "@angular/core";

@Component({
    moduleId:module.id,
    selector: "hero-details",
    templateUrl:"/app/hero-details/hero-details.html",
    styleUrls:[""]
})
export class HeroDetails  implements OnInit
{
   @Input() hero:Hero; 

    getHero():void {
        const id = +this.route.snapshot.params['id'];
        this.heroService.getHero(id)
          .subscribe(hero => this.hero = hero);    
    }

    goBack():void{
        this.location.back();
    }

   constructor(private route:ActivatedRoute,
                private location:Location,
                private heroService:HeroService
                 ){}
    ngOnInit(): void {
        this.getHero();
    }
}
