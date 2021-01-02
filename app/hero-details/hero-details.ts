
import {Component,Input} from "@angular/core";
import {Hero} from "../heroes/Ihero"

@Component({
    moduleId:module.id,
    selector: "hero-details",
    templateUrl:"/app/hero-details/hero-details.html",
    styleUrls:[""]
})
export class HeroDetails
{

   @Input() hero:Hero; 
}
