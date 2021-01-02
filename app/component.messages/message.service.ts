import {Injectable} from "@angular/core";

@Injectable()
export class MessageService{

messager:string[]=[];

add(mess:string){
    this.messager.push(mess);
}

clear(){
    this.messager=[];
}

}