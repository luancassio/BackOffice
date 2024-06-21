import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeRouting } from "./home.routing";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(HomeRouting)
    ]
})
export class HomeModule {}