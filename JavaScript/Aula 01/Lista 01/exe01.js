let resposta = prompt("Digite sim ou não");

while (resposta.toLowerCase() !== "sim") {

if (resposta.toLowerCase() === "não") {
	resposta = prompt("Digite Novamente").toLowerCase();
  alert("você digitou: " + resposta);
} else {
  resposta = prompt("Você tem noção dos seus atos ?").toLowerCase();
}

}
alert("Parabéns");
