def get_float_input(prompt: str, default: float) -> float:
    """
    Get float input from user with validation and error handling.
    
    Args:
        prompt (str): The prompt to display to the user
        default (float): Default value if no input is provided
        
    Returns:
        float: The validated input value
    """
    while True:
        try:
            value = input(f"{prompt} [{default}]: ").strip()
            if not value:
                return default
            result = float(value)
            if result < 0 and prompt != "Tensão de Entrada (V)":
                print("Valor deve ser positivo. Usando valor padrão.")
                return default
            return result
        except ValueError:
            print(f"Valor inválido. Usando valor padrão: {default}")
            return default