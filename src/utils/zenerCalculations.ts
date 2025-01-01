// Cálculos específicos para diodos Zener
export function calcularPotenciaZener(tensaoZener: number, correnteZener: number): number {
  return tensaoZener * correnteZener;
}

export function calcularCorrenteZener(tensaoEntrada: number, tensaoZener: number, resistencia: number): number {
  return (tensaoEntrada - tensaoZener) / resistencia;
}