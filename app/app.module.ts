
import{NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroService} from "../app/service/hero.servise";


import{AppComponent} from "./app.component";
import {Heroes} from "./heroes/heroes";
import {HeroDetails} from "./hero-details/hero-details";
import {ComponentMessager} from "../app/component.messages/component.messagers";
import {MessageService} from "../app/component.messages/message.service";
import {RoutingModule} from "../app/royting.module";
import {DashboardComponenet} from "../app/dashboard/dashboard";


@NgModule({
    imports:[BrowserModule,FormsModule,RoutingModule],
    declarations:[AppComponent,Heroes,HeroDetails,
                ComponentMessager,DashboardComponenet],
    bootstrap:[AppComponent],
    providers:[MessageService,HeroService]
})
export class AppModule{

}