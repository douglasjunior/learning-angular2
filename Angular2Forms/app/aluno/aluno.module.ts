import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AlunoFormComponent }  from './aluno-form.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ AlunoFormComponent ],
  exports: [ AlunoFormComponent ],
  providers: [  ]
})
export class AlunoModule { }