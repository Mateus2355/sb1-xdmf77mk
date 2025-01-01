import math

def calcular_tensao_media_retificada(tensao_entrada: float) -> float:
    return tensao_entrada / math.pi

def calcular_tensao_eficaz_retificada(tensao_entrada: float) -> float:
    return tensao_entrada / 2

def calcular_ripple(capacitancia: float, corrente: float, frequencia: float) -> float:
    return corrente / (frequencia * capacitancia * 1e-6)