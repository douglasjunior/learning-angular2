import { Component } from '@angular/core';

import { InputPropertyComponent } from './input-property.component'
import { OutputPropertyComponent } from './output-property.component'

@Component({
    moduleId: module.id,
    selector: 'exemplo-data-binding',
    templateUrl: 'data-binding.component.html',
    styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent {
    constructor() { 

    }

    conteudoAtual : string = "";
    conteudoSalvo : string = "";

    isMouseOver : boolean = false;

    url = 'http://saframax.com';
    urlImg = "http://lorempixel.com/400/200/technics/";

    nome = "";

    nomeCurso = "Angular JS 2!!";

    onClick() {
        alert('Botão clicado!');
    }

    onKeyup(event:KeyboardEvent){
        console.log(event)
        this.conteudoAtual = (<HTMLInputElement>event.target).value;
    }

    onSave(valor:string){
        this.conteudoSalvo = valor;
    }

    onMouseOver(){
        this.isMouseOver = true;
    }

    onMouseOut(){
        this.isMouseOver = false;
    }

    valorMudou(event:any){
        console.log(event.novoValor);
    }
}