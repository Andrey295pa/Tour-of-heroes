import { from } from "core-js/fn/array";
import{NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import{AppComponent} from "./app.component";
import {Heroes} from "./heroes/heroes";
import {HeroDetails} from "./hero-details/hero-details";
import {ComponentMessager} from "../app/component.messages/component.messagers";
import {MessageService} from "../app/component.messages/message.service";


@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent,Heroes,HeroDetails,ComponentMessager],
    bootstrap:[AppComponent],
    providers:[MessageService]
})
export class AppModule{

}