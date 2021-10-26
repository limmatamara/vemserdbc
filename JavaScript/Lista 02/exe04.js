/*4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;*/
for (var i=0; i<=100; i++) {
  if (i%2==0) {
    var resultado = i*i;
    console.log(`${i}^2 = ${resultado}`);
  }
}