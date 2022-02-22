import { Usuario } from "./usuario"

export class Admin implements Usuario {
  desconto: number

  arremateComDesconto = (value: number) => this.desconto - value
}