let t1 = parseFloat(prompt("Digite a nota T1:"));
let t2 = parseFloat(prompt("Digite a nota T2:"));
let p1 = parseFloat(prompt("Digite a nota P1:"));

let media = parseFloat((t1+t2+p1)/3);

if (t1 <0 || t2 <0 || p1<0) {
	alert("Alguma das notas não é válida")
} else {

if (media < 5) {
	alert(`Reprovado! Sua média foi ${media}`)
}
if (media >=5 && media <=7) {
	alert(`ALERTA DE RECUPERAÇÃO. Sua média foi ${media}`);
}
if (media > 7) {
	alert(`Parabéns, você foi aprovado! Sua média foi ${media}`);
}
}