import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {Heroes} from "../app/heroes/heroes";
import {DashboardComponenet} from "../app/dashboard/dashboard";

const routers:Routes=[
    {path:'heroes', component:Heroes},
    {path:'dashboadr', component:DashboardComponenet},
    { path: '', redirectTo: '/dashboadr', pathMatch: 'full' },
 ];

@NgModule({
    imports:[RouterModule.forRoot(routers)],
    exports:[RouterModule]
})
export class RoutingModule{

}