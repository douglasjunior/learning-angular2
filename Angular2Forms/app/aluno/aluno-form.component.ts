import { Component } from '@angular/core';
import { 
  AbstractControl, 
  ControlGroup, 
  FormBuilder, 
  Validators
} from '@angular/common';

import { Aluno }  from './aluno';
import { Curso }  from './../curso/curso';
import { EmailValidator } from './../validators/email.validator';

@Component({
    moduleId: module.id,
    selector: 'aluno-form',
    templateUrl: 'aluno-form.component.html'
})
export class AlunoFormComponent {
  
  sucesso: boolean = false;
  cursos: Curso[];
  aluno: Aluno;
  alunoForm: ControlGroup;

  constructor(fb: FormBuilder){
    this.aluno = new Aluno();
    this.cursos = [
      new Curso(1, 'Angular 2'), 
      new Curso(2, 'Java'),
      new Curso(3, 'Android')
    ];
    this.buildForm(fb);
  }

  buildForm(fb: FormBuilder): void {
		this.alunoForm = fb.group({
			nome: ['', Validators.required],
			email: ['', Validators.compose([
				Validators.required,
        EmailValidator.validate
			])],
			curso: ['', Validators.required]
		});
	}

  hasErrors(): boolean {
		for(let controlName in this.alunoForm.controls) {
			let control: AbstractControl = this.alunoForm.controls[controlName];
			if(!control.valid && !control.pristine) {
				return true;
			}
		}
		return false;
	}

  validadeNomeIsRequired(){
    return !this.alunoForm.find('nome').valid && !this.alunoForm.find('nome').pristine;
  }

  validadeEmailIsRequired(){
    return this.alunoForm.find('email').hasError('required') && !this.alunoForm.find('email').pristine;
  }

  validadeEmailIsValid(){
    return this.alunoForm.find('email').hasError('email') && !this.alunoForm.find('email').pristine;
  }

  validadeCursoIsRequired(){
    return !this.alunoForm.find('curso').valid && !this.alunoForm.find('curso').pristine;
  }

  enviar() {
    this.sucesso = true;
  }

  debug() : string {
    return JSON.stringify(this.aluno);
  }
}