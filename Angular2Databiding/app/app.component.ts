import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>

        <section class="lifecycle-properties">
            <article>
                <h3>Ciclo de vida properties</h3>
                
                <lifecycle [valorInicial]="valorInicial" *ngIf="deletarConteudo != true"></lifecycle>
                <button (click)="valorInicial = 20">Mudar valor</button> <br />
                <button (click)="deletarConteudo = true">Deletar</button>
            </article>
        </section>

        <exemplo-data-binding></exemplo-data-binding>
    `
})
export class AppComponent {

    valorInicial = 10;
    deletarConteudo = false;

}
