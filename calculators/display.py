def display_results(results: dict) -> None:
    """
    Display calculation results in a formatted way.
    
    Args:
        results (dict): Dictionary containing all calculation results
    """
    print("\n=== Resultados ===\n")
    
    # Diodo Comum
    print("Diodo Comum:")
    for key, value in results["diodo_comum"].items():
        label = {
            "corrente_maxima": "Corrente Máxima",
            "potencia_dissipada": "Potência Dissipada",
            "tensao_saida": "Tensão de Saída"
        }[key]
        unit = "A" if "corrente" in key else "W" if "potencia" in key else "V"
        print(f"• {label}: {value:.5f} {unit}")
    print()
    
    # Diodo Zener
    print("Diodo Zener:")
    for key, value in results["diodo_zener"].items():
        label = {
            "corrente_zener": "Corrente Zener",
            "potencia_zener": "Potência Zener"
        }[key]
        unit = "A" if "corrente" in key else "W"
        print(f"• {label}: {value:.5f} {unit}")
    print()
    
    # Retificador
    print("Retificador:")
    for key, value in results["retificador"].items():
        label = {
            "tensao_media": "Tensão Média",
            "tensao_eficaz": "Tensão Eficaz",
            "ripple": "Ripple"
        }[key]
        if key == "ripple":
            print(f"• {label}: {(value * 1000):.5f} mV")
        else:
            print(f"• {label}: {value:.5f} V")