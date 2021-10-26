// 6) Leia 5 valores numéricos do usuário e calcule seu somatório utilizando o laço Do While;
var soma = 0;
var contador=5;
var num = 0;
do {
	num =parseInt(prompt("Digite um número:"));
  soma +=num;
  contador--;
} while (contador >0);
console.log(soma);