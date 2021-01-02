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
var message_service_1 = require("../component.messages/message.service");
var Heroes = /** @class */ (function () {
    function Heroes(heroService, mesServise) {
        this.heroService = heroService;
        this.mesServise = mesServise;
    }
    Heroes.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHerroesAll().subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    Heroes.prototype.ngOnInit = function () {
        // throw new Error('Method not implemented.');
        // this.heroes=HeroesAll;
        this.getHeroes();
    };
    Heroes.prototype.onSelect = function (hero) {
        this.SelectedHero = hero;
        this.mesServise.add("Heroes component :Selected hero id=" + hero.id);
    };
    Heroes = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-heroes",
            templateUrl: "/app/heroes/heroes.html",
            styles: ["\n     .heroes {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n      .heroes li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .heroes li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n      .heroes li.selected {\n        background-color: #CFD8DC;\n        color: white;\n      }\n      .heroes li.selected:hover {\n        background-color: #BBD8DC;\n        color: white;\n      }\n      .heroes .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color:#405061;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n     "],
            providers: [hero_servise_1.HeroService]
            //  styleUrls:["/app/heroes/heroes.css"]
        }),
        __metadata("design:paramtypes", [hero_servise_1.HeroService, message_service_1.MessageService])
    ], Heroes);
    return Heroes;
}());
exports.Heroes = Heroes;
//# sourceMappingURL=heroes.js.map