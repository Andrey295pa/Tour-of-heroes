"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_servise_1 = require("../service/hero.servise");
var DashboardComponenet = /** @class */ (function () {
    function DashboardComponenet(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponenet.prototype.getHero = function () {
        var _this = this;
        this.heroService.getHerroesAll()
            .subscribe(function (her) { return _this.heroes = her.slice(1, 5); });
    };
    DashboardComponenet.prototype.ngOnInit = function () {
        this.getHero();
    };
    DashboardComponenet = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dasboard',
            templateUrl: '/app/dashboard/dashboard.html',
            styles: ["/* DashboardComponent's private CSS styles */\n    [class*='col-'] {\n      float: left;\n      padding-right: 20px;\n      padding-bottom: 20px;\n    }\n    [class*='col-']:last-of-type {\n      padding-right: 0;\n    }\n    a {\n      text-decoration: none;\n    }\n    *, *::after, *::before {\n      box-sizing: border-box;\n    }\n    h3 {\n      text-align: center;\n      margin-bottom: 0;\n    }\n    h4 {\n      position: relative;\n    }\n    .grid {\n      margin: 0;\n    }\n    .col-1-4 {\n      width: 25%;\n    }\n    .module {\n      padding: 20px;\n      text-align: center;\n      color: #eee;\n      max-height: 120px;\n      min-width: 120px;\n      background-color: #3f525c;\n      border-radius: 2px;\n    }\n    .module:hover {\n      background-color: #eee;\n      cursor: pointer;\n      color: #607d8b;\n    }\n    .grid-pad {\n      padding: 10px 0;\n    }\n    .grid-pad > [class*='col-']:last-of-type {\n      padding-right: 20px;\n    }\n    @media (max-width: 600px) {\n      .module {\n        font-size: 10px;\n        max-height: 75px; }\n    }\n    @media (max-width: 1024px) {\n      .grid {\n        margin: 0;\n      }\n      .module {\n        min-width: 60px;\n      }\n    }\n    \n    \n    /*\n    Copyright Google LLC. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at https://angular.io/license\n    */"]
        }),
        __metadata("design:paramtypes", [hero_servise_1.HeroService])
    ], DashboardComponenet);
    return DashboardComponenet;
}());
exports.DashboardComponenet = DashboardComponenet;
//# sourceMappingURL=dashboard.js.map