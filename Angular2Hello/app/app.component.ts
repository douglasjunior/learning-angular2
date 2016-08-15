import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursosComponent } from './cursos/cursos.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Ola Mundo!!!!</p>
        <meu-primeiro-component></meu-primeiro-component>
        <cursos-lista></cursos-lista>
    `,
    directives: [MeuPrimeiroComponent, CursosComponent]
})
export class AppComponent { }
