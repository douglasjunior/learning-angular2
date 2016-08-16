import { Component } from 'angular2/core';

import { CepPipe } from './cep-pipe';

@Component({
  selector: 'meu-app',
  templateUrl: 'app/app-component.html',
  pipes: [ CepPipe ]
})
export class AppComponent{

  texto: string = 'Curso angular 2.';
  valor: number = 1096.87;
  dataAtual: Date = new Date();
  comHora: boolean = true;
  cepExemplo: string = '87303000';

  get formatar() : string {
    return this.comHora ? 'dd/MM/yyyy HH:mm:ss' : 'dd/MM/yyyy';
  }

  mudarFormato() {
    this.comHora = !this.comHora;
  }

}
