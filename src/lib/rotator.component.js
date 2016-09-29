"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require("@angular/core");
var RotatorComponent = (function () {
    function RotatorComponent() {
    }
    RotatorComponent = __decorate([
        core_2.Component({
            template: "\n      <div class=\"rotator\">\n          <h1>Rotator</h1>\n      </div>\n    ",
            styles: ["\n\n    "],
            selector: "rotator"
        }), 
        __metadata('design:paramtypes', [])
    ], RotatorComponent);
    return RotatorComponent;
}());
exports.RotatorComponent = RotatorComponent;
var RotatorModule = (function () {
    function RotatorModule() {
    }
    RotatorModule = __decorate([
        core_1.NgModule({
            exports: [RotatorComponent],
            declarations: [RotatorComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RotatorModule);
    return RotatorModule;
}());
exports.RotatorModule = RotatorModule;
