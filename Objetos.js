/*
Objetos são uma coleção dnâmca de chaves e valores.

Class é a definição do que deve ser aquele objeto.

Instância é uma ocorrência daquele objeto.

constructor é oque acontece quando uma pessoa é instânciada.
ex:
*/

class Pessoa {
  nome;
  idade;
  anoDeNascimento;
  
  constructor(nome,idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;
  }
  
  descrever() {
    console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
  }
};

const vitor = new Pessoa('vitor', 25);
const renan = new Pessoa('renan', 30);

console.log(vitor);


function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log('${p1.nome} é mais velho(a) que ${p2.nome}');
  }else if  (p2.idade > p1.idade) {
    console.log('${p2.nome} é mais velho(a) que ${p1.nome}' );
  }else {
    console.log( '${p1.nome} e ${p2.nome} tem a mesma idade' );
  }
}

compararPessoas(vitor, renan);


/* 
1 - Crie uma classe para representar carros. Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado. 
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class carro {
  marca;
  cor;
  gastoMedioPorKm;
  
  constructor (marca,cor,gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
  }
  
  calcularGastoDePercurso(distanciaEmKm,precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
  }
}

const uno = new carro('Fiat', 'Prata', 1/12);
uno.calcularGastoDePercurso(70, 5);
console.log(uno.calcularGastoDePercurso(70, 5));
const palio = new carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));

/*
2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70 kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class pessoa {
  nome;
  peso;
  altura;
  
  constructor (nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }
  
  calcularImc () {
   return this.peso / (this.altura * this.altura);
  }
  classificarImc () {
   const imc = this.calcularImc();
    if (imc < 18.5) {
  return ('Abaixo do peso');
}else if (imc >= 18.5 && imc < 25) {
  return ('Peso normal');
}else if (imc >= 25 && imc < 30) {
  return ('Acima do peso');
}else if (imc >= 30 && imc < 40) {
  return ('Obeso');
}else {
  return ('Obesidade grave');
}
  }
}

const jose = new pessoa ('jose', 100, 1.75);
console.log(jose.classificarImc());
const jessica = new pessoa ('jessica', 53, 1.58);
console.log(jessica.classificarImc());
