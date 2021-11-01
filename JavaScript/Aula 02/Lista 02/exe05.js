/*5) Faça um algoritmo que apresente o quadrado de cada um dos números ímpares entre 100 e 1; (Decremento)*/
for (var i=100; i>=0; i--) {
    if (i%2!=0) {
      var resultado = i*i;
      console.log(`${i}^2 = ${resultado}`);
    }
}