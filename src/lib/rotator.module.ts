import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { RotatorComponent } from './rotator.component';

const declarables = [RotatorComponent];

@NgModule({
    imports: [CommonModule],
    exports: [declarables],
    declarations: [declarables]
})
export class RotatorModule { }
