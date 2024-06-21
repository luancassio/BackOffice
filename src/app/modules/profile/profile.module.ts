import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { ProfileRouting } from "./profile.routing";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ProfileRouting),
    ],
    providers: []
})
export class ProfileModule {}