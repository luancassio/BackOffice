import { NgModule } from "@angular/core";
import { AuthenticationComponent } from "./authentication.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AuthenticationRouting } from "./authentication.routing";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
        AuthenticationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        RouterModule.forChild(AuthenticationRouting)
    ]
})
export class AuthenticationModule {}