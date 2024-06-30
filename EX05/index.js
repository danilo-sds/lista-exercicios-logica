// Dada as seguintes entradas: quilometragem inicial, quilometragem final, litros consumidos,
// preço do litro de combustível. Faça um programa que imprima o seguinte Relatório: distância
// percorrida, Valor total gasto e o consumo do carro (quantos quilômetros percorre com 1 litro
// de combustível).

let initialKm = parseFloat(prompt("Digite a sua quilometragem inicial: "));
let finalKm = parseFloat(prompt("Digite a sua quilometragem final: "));
let litersConsumed = parseFloat(
  prompt("Informe quantos litros foram consumidos:")
);
let prideCombustible = parseFloat(
  prompt("Informe o valor do litro do combustível:")
);

let travelledDistance = finalKm - initialKm;
let totalValueSpent = litersConsumed * prideCombustible;
let carConsumption = travelledDistance / litersConsumed;

alert(`Distância percorrida: ${travelledDistance}
Valor total do gasto: ${totalValueSpent}
Consumo do carro: ${carConsumption}`);
