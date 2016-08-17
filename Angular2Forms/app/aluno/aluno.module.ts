import { NgModule }      from '@angular/core';
import { CommonModule, FormBuilder, FORM_DIRECTIVES } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AlunoFormComponent }  from './aluno-form.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ AlunoFormComponent, FORM_DIRECTIVES ],
  exports: [ AlunoFormComponent ],
  providers: [ FormBuilder ]
})
export class AlunoModule { }