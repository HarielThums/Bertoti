import { Usuario } from "./usuario"

export class Funcionario implements Usuario {
  desconto: number

  arremateComDesconto = (value: number) => this.desconto - value
}