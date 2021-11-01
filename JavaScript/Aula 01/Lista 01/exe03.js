let isFriday = false ;
let twoGreaterThanFour = false;
let isValueEmpty = false;


let resposta = prompt("Hoje é sexta feira ?").toLowerCase();

isFriday = resposta === "sim";

alert(isFriday);

totwoGreaterThanFour = 2 > 4;

alert("2 > 4 ? " + totwoGreaterThanFour);

let resposta2 = prompt("Qual é o seu nome?");
isValueEmpty = resposta2 != null && resposta2 != undefined && resposta2 != '';
alert(isValueEmpty);