/*  Uma cocondicional é quando tentamos vê se uma situação é verdadeira ou falsa.

O boolean é a variavel que representa verdadeira ou falso. ex:
const camisetaRenanAzul = true
const camisetaLemaoAzul = false

O (if) serve para alterar o fluxo de execução de um prprograma baseado no valor verdadeiro ou falso, de uma expressão lógica.
Caso o valor não saia como esperado utilizamos o (Else) que irá executar o próximo código.

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto);
}else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto);
}