import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AlunoModule } from './aluno/aluno.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, AlunoModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }