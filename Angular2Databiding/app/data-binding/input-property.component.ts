import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'curso',
    template: '{{ nomeCurso }}',
    //inputs: ['nomeCurso:nome']
})
export class InputPropertyComponent  {
    constructor() { }

    @Input('nome') nomeCurso = '';
    
}