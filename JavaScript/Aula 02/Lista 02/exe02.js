/* 2) Faça um programa que calcule a soma dos primeiros 50 números pares;*/
var soma =0;
for (var i = 0; i <= 50; i++) {
    if(i % 2 == 0) {
        soma = soma + i;      
    }
}
console.log(soma);