import { Usuario } from "./usuario"

export class Afiliado implements Usuario {
  desconto: number

  arremateComDesconto = (value: number) => this.desconto - value
}
