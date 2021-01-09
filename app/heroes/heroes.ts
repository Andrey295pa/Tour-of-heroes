import {Component, OnInit,Input} from '@angular/core';
import {Hero} from "../heroes/Ihero";
import {HeroesAll} from "../heroes/mock-hero";
import {HeroService} from "../service/hero.servise";
import {MessageService} from "../component.messages/message.service";


@Component({
     moduleId:module.id,
     selector:"my-heroes",
     templateUrl:"/app/heroes/heroes.html",
     styles:[`
.heroes {
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;
}
.heroes li {
  position: relative;
  cursor: pointer;
  background-color: #EEE;
  margin: .5em;
  padding: .3em 0;
  height: 1.6em;
  border-radius: 4px;
}

.heroes li:hover {
  color: #607D8B;
  background-color: #DDD;
  left: .1em;
}

.heroes a {
  color: #333;
  text-decoration: none;
  position: relative;
  display: block;
  width: 250px;
}

.heroes a:hover {
  color:#607D8B;
}

.heroes .badge {
  display: inline-block;
  font-size: small;
  color: white;
  padding: 0.8em 0.7em 0 0.7em;
  background-color:#405061;
  line-height: 1em;
  position: relative;
  left: -1px;
  top: -4px;
  height: 1.8em;
  min-width: 16px;
  text-align: right;
  margin-right: .8em;
  border-radius: 4px 0 0 4px;
}
     `],
    //  providers:[HeroService]
    //  styleUrls:["/app/heroes/heroes.css"]
})
export class Heroes implements OnInit{

    SelectedHero:Hero;

    heroes:Hero[];

    getHeroes():void{
        this.heroService.getHerroesAll()
        .subscribe(heroes=>this.heroes=heroes);
    }

    constructor(private heroService:HeroService, private mesServise:MessageService){}

    ngOnInit(): void {
       // throw new Error('Method not implemented.');
      // this.heroes=HeroesAll;
       this.getHeroes();
    }

    onSelect(hero:Hero):void{
        this.SelectedHero=hero;
        this.mesServise.add(`Heroes component :Selected hero id=${hero.id}`);
    }
}