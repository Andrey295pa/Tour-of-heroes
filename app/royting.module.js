"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var heroes_1 = require("../app/heroes/heroes");
var dashboard_1 = require("../app/dashboard/dashboard");
var hero_details_1 = require("../app/hero-details/hero-details");
var routers = [
    { path: 'heroes', component: heroes_1.Heroes },
    { path: 'dashboadr', component: dashboard_1.DashboardComponenet },
    { path: 'detail/:id', component: hero_details_1.HeroDetails },
    { path: '', redirectTo: '/dashboadr', pathMatch: 'full' },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routers)],
            exports: [router_1.RouterModule]
        })
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=royting.module.js.map