def calcular_corrente_zener(tensao_entrada: float, tensao_zener: float, resistencia: float) -> float:
    return (tensao_entrada - tensao_zener) / resistencia

def calcular_potencia_zener(tensao_zener: float, corrente_zener: float) -> float:
    return tensao_zener * corrente_zener