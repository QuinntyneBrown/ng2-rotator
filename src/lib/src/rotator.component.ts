import { NgModule } from '@angular/core';
import { Component, Input } from "@angular/core";

@Component({
    templateUrl: "./rotator.component.html",
    styleUrls: ["./rotator.component.css"],
    selector: "rotator"
})
export class RotatorComponent { }


@NgModule({
    exports: [RotatorComponent],
    declarations: [RotatorComponent]
})
export class RotatorModule { }