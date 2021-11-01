var num1 = parseInt(prompt("Digite o primeiro número"));
var num2 = parseInt(prompt("Digite o segundo número:"));
var operacao = prompt("Digite a operação desejada (+,-,/ ou *)");

if (operacao !== '+' && operacao !== '-' && operacao !== '/' && operacao !== '*') {
alert("Escolha uma operação válida")} else { 
if (operacao === '+') {
	var resultado = num1+num2;
  alert(resultado);
}
if (operacao === '-') {
	var resultado = num1 - num2;
  alert(resultado)
}
if (operacao === '/') {
	if (num2===0) {
  	alert("Divisão por 0 é uma indeterminação!")
  } else {
  var resultado = num1/num2;
  alert(resultado);
  }
}
if (operacao === '*') {
	var resultado = num1*num2;
  alert(resultado);
}
}