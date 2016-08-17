import { Component } from '@angular/core';

import { Aluno }  from './aluno';
import { Curso }  from './../curso/curso';

@Component({
    moduleId: module.id,
    selector: 'aluno-form',
    templateUrl: 'aluno-form.component.html',
    styleUrls: ['aluno-form.component.css']
})
export class AlunoFormComponent {
  
  sucesso: boolean = false;
  cursos: Curso[];
  aluno: Aluno;

  constructor(){
    this.aluno = new Aluno();
    this.cursos = [
      new Curso(1, 'Angular 2'), 
      new Curso(2, 'Java'),
      new Curso(3, 'Android')
    ];
  }

  enviar() {
    this.sucesso = true;
  }

  debug() : string {
    return JSON.stringify(this.aluno);
  }

  active: boolean = true;
  reset() {
    console.log("reset");
    this.aluno = new Aluno();
    // isso aqui é uma gambiarra chamada de "small trick" pela documentação do Angular
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}