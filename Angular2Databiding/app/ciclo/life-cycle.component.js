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
var LifeCycleComponent = (function () {
    function LifeCycleComponent() {
        this.valorInicial = 10;
        console.log("constructor");
    }
    LifeCycleComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
        console.log(this.paragrafo);
    };
    LifeCycleComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges");
    };
    LifeCycleComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    LifeCycleComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    LifeCycleComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    LifeCycleComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    LifeCycleComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    LifeCycleComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LifeCycleComponent.prototype, "valorInicial", void 0);
    __decorate([
        core_1.ViewChild('paragrafo'), 
        __metadata('design:type', HTMLElement)
    ], LifeCycleComponent.prototype, "paragrafo", void 0);
    LifeCycleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'lifecycle',
            template: "\n        <p #paragrafo >{{valorInicial}}</p>\n        <p>{{ paragrafo.textContent }}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], LifeCycleComponent);
    return LifeCycleComponent;
}());
exports.LifeCycleComponent = LifeCycleComponent;
//# sourceMappingURL=life-cycle.component.js.map