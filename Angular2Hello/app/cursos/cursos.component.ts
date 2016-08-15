import { Component } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html'
})

export class CursosComponent {

    nome = 'Douglas';
    jogos : any;

    constructor(cursosService: CursosService) {
        this.jogos = cursosService.getJogos();
    }

}