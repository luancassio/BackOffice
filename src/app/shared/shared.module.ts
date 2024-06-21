import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        CardComponent,
        
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[
        CardComponent
    ]
})
export class SharedModule {}