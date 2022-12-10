/*
Arrays nada mais são do que listas de conteudos.
*/

const alunos = ['Joao', 'Vitor', 'Marina'];

console.log(alunos);

console.log(alunos.pop());

console.log(alunos);



const notas = []

notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);



const nome ='Vitor johansen Guerra';

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra);
  
}


/*
// 1) Crie um programa que dado um número e prima a sua tabuada.
*/


const numero = 7;
for (let i = 1; i <= 10; i++) {
 console.log(i * numero);
}


/*
// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.

*/

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
 const numero = numeros[i];
  
  if (numero % 2 === 0) {
    console.log(numero);
  }
} 
