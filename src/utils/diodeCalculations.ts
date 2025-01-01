// Funções utilitárias para cálculos de diodos
export function calcularCorrenteMaxima(tensaoInversa: number, resistencia: number): number {
  return tensaoInversa / resistencia;
}

export function calcularPotenciaDissipada(corrente: number, tensaoQueda: number): number {
  return corrente * tensaoQueda;
}

export function calcularTensaoSaida(tensaoEntrada: number, tensaoQueda: number): number {
  return tensaoEntrada - tensaoQueda;


}