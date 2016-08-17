import { Curso } from './../curso/curso'

export class Aluno {
  constructor(
    public nome?: string,
    public email?: string,
    public idade?: number,
    public curso?: number
  ){}
}