import {Component} from "@angular/core";
import {MessageService} from "../component.messages/message.service";

@Component({
    selector:"component-messager",
    moduleId:module.id,
    templateUrl:"/app/component.messages/component.message.html",
    styles:[`h2 {
        color: red;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: lighter;
      }
      
      button.clear {
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #eee;
        margin-bottom: 12px;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: #cfd8dc;
      }`],
   // providers:[MessageService]
})
export class ComponentMessager {

    constructor(public mesagServ:MessageService){
        
    }

}