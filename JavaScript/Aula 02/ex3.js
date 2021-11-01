var opcao = 1;
while (opcao !==2) {
    opcao.parseInt(prompt("Informe a opção desejada: \n 1 - Continuar perguntando \n 2 - Parar de pergutar"), 10);

    if (opcao !== 1 && opcao !==2) {
        alert("Opção inválida");
    }
}


