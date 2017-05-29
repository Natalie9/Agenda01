export class Horario {
  dia: String;
  id: string;
  nome: string;
  email: string;
  instituicao: string;
  turma: string;
  curso: string;

  constructor (args:any){
    Object.assign(this, args);
  }
}
