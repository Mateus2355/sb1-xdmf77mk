from calculators.diode_calculator import *
from calculators.zener_calculator import *
from calculators.rectifier_calculator import *
from calculators.input_handler import get_float_input
from calculators.display import display_results

def main():
    try:
        print("\n=== Calculadora de Diodos ===\n")
        
        # Entrada de dados
        inputs = {
            "tensao_entrada": get_float_input("Tensão de Entrada (V)", 0),
            "tensao_queda": get_float_input("Tensão de Queda do Diodo (V)", 0.7),
            "resistencia": get_float_input("Resistência (Ω)", 1000),
            "tensao_zener": get_float_input("Tensão Zener (V)", 5.1),
            "capacitancia": get_float_input("Capacitância (µF)", 1000),
            "frequencia": get_float_input("Frequência (Hz)", 60)
        }
        
        results = calculate_all_values(**inputs)
        display_results(results)

    except KeyboardInterrupt:
        print("\nPrograma encerrado pelo usuário.")
    except Exception as e:
        print(f"\nErro: {str(e)}")

def calculate_all_values(**params):
    return {
        "diodo_comum": {
            "corrente_maxima": calcular_corrente_maxima(params["tensao_entrada"], params["resistencia"]),
            "potencia_dissipada": calcular_potencia_dissipada(
                calcular_corrente_maxima(params["tensao_entrada"], params["resistencia"]), 
                params["tensao_queda"]
            ),
            "tensao_saida": calcular_tensao_saida(params["tensao_entrada"], params["tensao_queda"])
        },
        "diodo_zener": {
            "corrente_zener": calcular_corrente_zener(params["tensao_entrada"], params["tensao_zener"], params["resistencia"]),
            "potencia_zener": calcular_potencia_zener(
                params["tensao_zener"],
                calcular_corrente_zener(params["tensao_entrada"], params["tensao_zener"], params["resistencia"])
            )
        },
        "retificador": {
            "tensao_media": calcular_tensao_media_retificada(params["tensao_entrada"]),
            "tensao_eficaz": calcular_tensao_eficaz_retificada(params["tensao_entrada"]),
            "ripple": calcular_ripple(params["capacitancia"], 
                                    calcular_corrente_maxima(params["tensao_entrada"], params["resistencia"]), 
                                    params["frequencia"])
        }
    }

if __name__ == "__main__":
    main()