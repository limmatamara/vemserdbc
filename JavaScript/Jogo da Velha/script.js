//DOM de interação
const casas = document.getElementsByTagName('input'); //pega a lista de casas do tabuleiro do jogo
const label_jogador = getElementById('jogador'); //label do jogador da vez


//variaveis do estado do jogo
var jogador = '_'; //"_" define que nenhum jogador tem a vez, que ninguém venceu a partida ainda ou que uma casa está vazia
var vencedor = '_';

//Define a resposta ao evento de clique nas casas do "tabuleiro"
for (var i = 0; i<=9; i++) {
    casas[i].addEventListener('click', (event) => {
        //se a casa estiver vazia e ninguém tiver vencido a partida
        if((event.target.value=='_' && vencedor == '_')) {
            event.target.value = jogador; //preenche a casa com X ou O
            event.target.style.color = 'black'; //torna o valor da casa visível

            trocarJogador(); //função que troca a vez do jogador
            vencedor = vitoria();

            if(vencedor!='_') {
                label_jogador.innerText=`${vencedor} venceu!`;
            }
        }
    
    });
}


//funcao para definir aleatoriamente o jogador da primeira jogada
function sortearJogador() {
    if (Math.floor(Math.random() * 2 == 0) { //math floor retorna o menor número inteiro dentre o número passado como argumento
        //(Math.floor(Math.random() * 2) basicamente faz um cara ou coroa, retornando hora o número 0, hora o número 1.
        jogador = "O"; // define jogador O como atual
        label_jogador.innerText = "O"; //exibe na página atual qual é o jogador atual
        label_jogador.style.color='#F00'; //deixa o texto na cor vermelha
    } else {
        jogador = "X" //define o jogador X como atual
        label_jogador.innerText = "X";
        label_jogador.style.color = '#00F' //deixa o texto na cor azul
    }
}

sortearJogador();

//alternar a vez entre os jogadores
function trocarJogador() {
    if (jogador == 'X') {
        jogador = 'O';
        label_jogador.innerText = 'O';
        label_jogador.style.color='#FOO';
    } else {
        jogador = 'X';
        label_jogador.innerText = 'X';
        label_jogador.style.color = '#00F';
    }
}

function vitoria() {
    var vitoria = function() {
        if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
            casas[0].style.backgroundColor='#0F0';
            casas[1].style.backgroundColor='#0F0';
            casas[2].style.backgroundColor='#0F0';
            //preenche casas da 1ª linha horizontal
            return casas[0].value;

        }else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
            casas[3].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[5].style.backgroundColor='#0F0';
            //preenche casas da 2ª linha horizontal
            return casas[3].value;

        }else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
            casas[6].style.backgroundColor='#0F0';
            casas[7].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';
            //preenche casas da 3ª linha horizontal
            return casas[6].value;

        }else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
            casas[0].style.backgroundColor='#0F0';
            casas[3].style.backgroundColor='#0F0';
            casas[6].style.backgroundColor='#0F0';
            //preenche casas da 1ª linha vertical
            return casas[0].value;

        }else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
            casas[1].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[7].style.backgroundColor='#0F0';
            //preenche casas da 2ª linha vertical
            return casas[1].value;

        }else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
            casas[2].style.backgroundColor='#0F0';
            casas[5].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';
            //preenche casas da 3ª linha vertical
            return casas[2].value;
        }else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
            casas[0].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[8].style.backgroundColor='#0F0';
            //preenche casas da diagonal esquerda
            return casas[0].value;

        }else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
            casas[2].style.backgroundColor='#0F0';
            casas[4].style.backgroundColor='#0F0';
            casas[6].style.backgroundColor='#0F0';
            //preenche casas da diagonal direita
            return casas[2].value;
        }

        return '_';
    }
}