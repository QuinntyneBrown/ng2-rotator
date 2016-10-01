import { NgModule } from "@angular/core";

import { RotatorComponent } from "./rotator.component";

const declarables = [RotatorComponent];

@NgModule({
    exports: declarables,
    declarations: declarables
})
export class RotatorModule { }