/*1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
    A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine o salário atual desse funcionário (2021);*/    
    var aumento = 0.015;
    var salario =1000;
    var anoInicial = 2016;
    var anoFinal = 2021;
    while (anoInicial <= anoFinal) {
	    if (anoInicial < 2018) {
  	        salario = salario + (salario * aumento);
        } else {
  	        aumento = aumento*2;
            salario = salario + (salario * aumento);
        } 
        anoInicial++;
    }
    console.log(parseFloat(salario.toFixed(2)));