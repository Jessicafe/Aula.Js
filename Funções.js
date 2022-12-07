/*
Função: é um pequeno trecho de código em que podemos invocar ele para ser executado várias vezes.
ex:
*/


function escrevaMeuNome(nome) {
  return 'Meu nome é ' + nome;
}

function verificarIdade (idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Jéssica') + ' é Maior');
  }else {
    console.log('Menor');
  }
}

verificarIdade(18);