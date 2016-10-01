import { NgModule, Component, ElementRef, Input, AfterViewInit } from "@angular/core";

@Component({
    templateUrl: "./rotator.component.html",
    styleUrls: ["./rotator.component.css"],
    selector: "rotator"
})
export class RotatorComponent implements AfterViewInit {
    constructor(private _elementRef: ElementRef) { }
    
    ngAfterViewInit() { $(this._elementRef.nativeElement).slick({}); }

    private _rotatorItems: Array<any>;

    @Input('rotatorItems')
    public set rotatorItems(value:any) { this._rotatorItems = value; }

}