import math

def calcular_corrente_maxima(tensao_entrada: float, resistencia: float) -> float:
    return tensao_entrada / resistencia

def calcular_potencia_dissipada(corrente: float, tensao_queda: float) -> float:
    return corrente * tensao_queda

def calcular_tensao_saida(tensao_entrada: float, tensao_queda: float) -> float:
    return tensao_entrada - tensao_queda