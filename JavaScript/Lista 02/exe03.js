// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;
var tabuada = parseInt(prompt("Digite a tabuada desejada:"));
var contador = parseInt(0);

for (var i=1;i<=10;i++) {
    contador = i * tabuada;  
    console.log(`${tabuada} x ${i} = ${contador}`)    
}
