export function calcularTensaoMediaRetificada(tensaoPico: number): number {
  // Para retificação de meia onda
  return tensaoPico / Math.PI;
}

export function calcularTensaoEficazRetificada(tensaoPico: number): number {
  // Para retificação de meia onda
  return tensaoPico / 2;
}

export function calcularRipple(capacitancia: number, corrente: number, frequencia: number): number {
  return corrente / (frequencia * capacitancia);
}