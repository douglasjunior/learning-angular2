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
var input_property_component_1 = require('./input-property.component');
var output_property_component_1 = require('./output-property.component');
var life_cycle_component_1 = require('./../ciclo/life-cycle.component');
var DataBindingComponent = (function () {
    function DataBindingComponent() {
        this.conteudoAtual = "";
        this.conteudoSalvo = "";
        this.isMouseOver = false;
        this.url = 'http://saframax.com';
        this.urlImg = "http://lorempixel.com/400/200/technics/";
        this.nome = "";
        this.nomeCurso = "Angular JS 2!!";
        this.valorInicial = 10;
        this.deletarConteudo = false;
    }
    DataBindingComponent.prototype.onClick = function () {
        alert('Botão clicado!');
    };
    DataBindingComponent.prototype.onKeyup = function (event) {
        console.log(event);
        this.conteudoAtual = event.target.value;
    };
    DataBindingComponent.prototype.onSave = function (valor) {
        this.conteudoSalvo = valor;
    };
    DataBindingComponent.prototype.onMouseOver = function () {
        this.isMouseOver = true;
    };
    DataBindingComponent.prototype.onMouseOut = function () {
        this.isMouseOver = false;
    };
    DataBindingComponent.prototype.valorMudou = function (event) {
        console.log(event.novoValor);
    };
    DataBindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exemplo-data-binding',
            templateUrl: 'data-binding.component.html',
            styleUrls: ['data-binding.component.css'],
            directives: [input_property_component_1.InputPropertyComponent, output_property_component_1.OutputPropertyComponent, life_cycle_component_1.LifeCycleComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindingComponent);
    return DataBindingComponent;
}());
exports.DataBindingComponent = DataBindingComponent;
//# sourceMappingURL=data-binding.component.js.map