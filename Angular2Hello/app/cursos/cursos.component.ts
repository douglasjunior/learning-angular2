import { Component } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
    moduleId: module.id,
    selector: 'cursos-lista',
    templateUrl: 'cursos.component.html',
    providers: [CursosService]
})

export class CursosComponent {

    nome = 'Douglas';
    jogos = null;

    constructor(cursosService: CursosService) {
        this.jogos = cursosService.getJogos();
    }

}