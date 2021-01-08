import {Component, OnInit} from "@angular/core";
import {Hero} from "../heroes/Ihero";
import {HeroService } from "../service/hero.servise";

@Component({
    moduleId:module.id,
    selector:'dasboard',
    templateUrl:'/app/dashboard/dashboard.html',
    styles:[`/* DashboardComponent's private CSS styles */
    [class*='col-'] {
      float: left;
      padding-right: 20px;
      padding-bottom: 20px;
    }
    [class*='col-']:last-of-type {
      padding-right: 0;
    }
    a {
      text-decoration: none;
    }
    *, *::after, *::before {
      box-sizing: border-box;
    }
    h3 {
      text-align: center;
      margin-bottom: 0;
    }
    h4 {
      position: relative;
    }
    .grid {
      margin: 0;
    }
    .col-1-4 {
      width: 25%;
    }
    .module {
      padding: 20px;
      text-align: center;
      color: #eee;
      max-height: 120px;
      min-width: 120px;
      background-color: #3f525c;
      border-radius: 2px;
    }
    .module:hover {
      background-color: #eee;
      cursor: pointer;
      color: #607d8b;
    }
    .grid-pad {
      padding: 10px 0;
    }
    .grid-pad > [class*='col-']:last-of-type {
      padding-right: 20px;
    }
    @media (max-width: 600px) {
      .module {
        font-size: 10px;
        max-height: 75px; }
    }
    @media (max-width: 1024px) {
      .grid {
        margin: 0;
      }
      .module {
        min-width: 60px;
      }
    }
    
    
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license
    */`]
})
export class DashboardComponenet implements OnInit{

heroes:Hero[]=[];

constructor (private heroService:HeroService){}

getHero():void{
    this.heroService.getHerroesAll()
    .subscribe(her => this.heroes = her.slice(1, 5));
}

ngOnInit(): void {
    this.getHero();    
}

}