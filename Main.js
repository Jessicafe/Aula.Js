/*
Através do require que veremos abaixo poderemos importar  certos arquivos, em um arquivo executaremos o código para importar(require)  enquanto no outro o de exportar(module exports), assim sendo, tudo que esta no arquivo que usamos o require estamos importando oque está sendo exportado.

 O gets pega uma leitura como se fosse alguém digitando.
 O print tem a mesma função de um console.log.

*/

const {gets, print } = require('./Funcoes auxiliares');

/*
  Uma sala contém cinco alunos e para cada aluno foi sorteado um número de 1 - cada
 Faça um programa que receba os cinco números sorteados para os alunos e mostre o maior número sorteado.
 
 Dados de entrada:
 5
 50
 10
 98
 23
 
 Saída:
 98
 */

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
  const numerosSorteado = gets();
  if (numerosSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numerosSorteado;
  }
}

  print(maiorValorEncontrado);