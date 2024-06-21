import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { UserRouting } from "./user.routing";
import { UserComponent } from "./page/register/user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";
import { ListUserComponent } from "./page/list/list-user.component";
import { NgToggleModule } from "ng-toggle-button";

@NgModule({
    declarations: [
        UserComponent,
        ListUserComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(UserRouting),
        FormsModule,
        ReactiveFormsModule,
        NgxMaskModule.forChild(),
        NgToggleModule
    ],
    providers: []
})
export class UserModule {}