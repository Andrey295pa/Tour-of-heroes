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
var message_service_1 = require("../component.messages/message.service");
var ComponentMessager = /** @class */ (function () {
    function ComponentMessager(mesagServ) {
        this.mesagServ = mesagServ;
    }
    ComponentMessager = __decorate([
        core_1.Component({
            selector: "component-messager",
            moduleId: module.id,
            templateUrl: "/app/component.messages/component.message.html",
            styles: ["h2 {\n        color: red;\n        font-family: Arial, Helvetica, sans-serif;\n        font-weight: lighter;\n      }\n      \n      button.clear {\n        font-family: Arial, sans-serif;\n        color: #333;\n        background-color: #eee;\n        margin-bottom: 12px;\n        border: none;\n        padding: 5px 10px;\n        border-radius: 4px;\n        cursor: pointer;\n      }\n      button:hover {\n        background-color: #cfd8dc;\n      }"],
        }),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], ComponentMessager);
    return ComponentMessager;
}());
exports.ComponentMessager = ComponentMessager;
//# sourceMappingURL=component.messagers.js.map