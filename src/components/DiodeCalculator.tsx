import { useState } from 'react';
import { 
  calcularCorrenteMaxima,
  calcularPotenciaDissipada, 
  calcularTensaoSaida 
} from '../utils/diodeCalculations';
import {
  calcularPotenciaZener,
  calcularCorrenteZener
} from '../utils/zenerCalculations';
import {
  calcularTensaoMediaRetificada,
  calcularTensaoEficazRetificada,
  calcularRipple
} from '../utils/rectifierCalculations';

export function DiodeCalculator() {
  const [tensaoEntrada, setTensaoEntrada] = useState<number>(0);
  const [tensaoQueda, setTensaoQueda] = useState<number>(0.7);
  const [resistencia, setResistencia] = useState<number>(1000);
  const [tensaoZener, setTensaoZener] = useState<number>(5.1);
  const [capacitancia, setCapacitancia] = useState<number>(1000); // µF
  const [frequencia, setFrequencia] = useState<number>(60); // Hz
  
  const correnteMaxima = calcularCorrenteMaxima(tensaoEntrada, resistencia);
  const potenciaDissipada = calcularPotenciaDissipada(correnteMaxima, tensaoQueda);
  const tensaoSaida = calcularTensaoSaida(tensaoEntrada, tensaoQueda);
  const correnteZener = calcularCorrenteZener(tensaoEntrada, tensaoZener, resistencia);
  const potenciaZener = calcularPotenciaZener(tensaoZener, correnteZener);
  
  // Cálculos do retificador
  const tensaoMedia = calcularTensaoMediaRetificada(tensaoEntrada);
  const tensaoEficaz = calcularTensaoEficazRetificada(tensaoEntrada);
  const ripple = calcularRipple(capacitancia * 1e-6, correnteMaxima, frequencia);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Calculadora de Diodos</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tensão de Entrada (V)
          </label>
          <input
            type="number"
            value={tensaoEntrada}
            onChange={(e) => setTensaoEntrada(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tensão de Queda do Diodo (V)
          </label>
          <input
            type="number"
            value={tensaoQueda}
            onChange={(e) => setTensaoQueda(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tensão Zener (V)
          </label>
          <input
            type="number"
            value={tensaoZener}
            onChange={(e) => setTensaoZener(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Resistência (Ω)
          </label>
          <input
            type="number"
            value={resistencia}
            onChange={(e) => setResistencia(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Capacitância (µF)
          </label>
          <input
            type="number"
            value={capacitancia}
            onChange={(e) => setCapacitancia(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Frequência (Hz)
          </label>
          <input
            type="number"
            value={frequencia}
            onChange={(e) => setFrequencia(Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h2 className="text-lg font-semibold mb-3">Resultados:</h2>
          <div className="space-y-2">
            <div className="mb-3">
              <h3 className="font-medium">Diodo Comum:</h3>
              <p>Corrente Máxima: {correnteMaxima.toFixed(5)} A</p>
              <p>Potência Dissipada: {potenciaDissipada.toFixed(5)} W</p>
              <p>Tensão de Saída: {tensaoSaida.toFixed(5)} V</p>
            </div>
            
            <div className="mb-3">
              <h3 className="font-medium">Diodo Zener:</h3>
              <p>Corrente Zener: {correnteZener.toFixed(5)} A</p>
              <p>Potência Zener: {potenciaZener.toFixed(5)} W</p>
            </div>

            <div>
              <h3 className="font-medium">Retificador:</h3>
              <p>Tensão Média: {tensaoMedia.toFixed(5)} V</p>
              <p>Tensão Eficaz: {tensaoEficaz.toFixed(5)} V</p>
              <p>Ripple: {(ripple * 1000).toFixed(5)} mV</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}