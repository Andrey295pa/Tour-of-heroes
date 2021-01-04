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
    };
    DashboardComponenet = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dasboard',
            templateUrl: '/app/dashboard/dashboard.html',
            styles: [""]
        }),
        __metadata("design:paramtypes", [hero_servise_1.HeroService])
    ], DashboardComponenet);
    return DashboardComponenet;
}());
exports.DashboardComponenet = DashboardComponenet;
//# sourceMappingURL=dashboard.js.map