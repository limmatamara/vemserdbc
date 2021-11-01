let colaboradores = [];
let projeto = [];

//classes
class Marcacao {
    dia = 0;
    horas = 0;
    constructor (dia, horas) {
        this.dia = dia;
        this.horas = horas;
    }
}

class Colaborador {
    id = 0;
    nome = ' ';
    codProjeto =0;
    marcacoesPonto = [];

    constructor (id, nome) {
        this.id = id;
        this.nome = nome;
    }

    marcarPonto(d,h) {
        this.marcacoesPonto.push(new Marcacao(d,h));
    }
}

class Projeto {
    codigo = 0;
    titulo = ' ';
    colaboradoresAlocados = [];

    constructor (codigo, titulo) {
        this.codigo = codigo;
        this.titulo = titulo;
    }

}

//menu
do {
    var selecionado = prompt( `Escolha a opção desejada a ser realizada: \n
                                1 - Cadastrar Colaborador; \n
                                2 - Cadastrar Projeto; \n
                                3 - Alocar Colaborador; (à algum projeto) \n
                                4 - Desalocar Colaborador; \n
                                5 - Marcar Ponto; \n
                                6 - Ver Lista de Colaboradores Sem Projeto; \n
                                7 - Ver Lista de Projetos Sem Colaboradores; \n
                                8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto; \n
                                9 - Encerrar Execução do Sistema;\n
                            `);

    //opcao selecionada do menu
    switch (selecionado) {
        case '1' :
            //id e nome do colaborador
            let idDoColaborador = prompt("Digite o id do COLABORADOR que deseja CADASTRAR");
            idDoColaborador = parseInt(idDoColaborador);
            let nomeDoColaborador = prompt("Digite o nome do COLABORADOR que deseja CADASTRAR");
            //criar colaborador
            colaboradores.push(new Colaborador(idDoColaborador, nomeDoColaborador));
            alert(`${nomeDoColaborador} \n ID:  ${idColaborador} foi cadastrado`);
        break;

        case '2': 
            //cadastro de projeto - codigo e titulo
            let codProjeto = prompt('Digite o CÓDIGO do projeto a ser CADASTRADO:');
            codProjeto = parseInt(codProjeto);
            let tituloProjeto = prompt('Digite o TÍTULO do projeto a ser CADASTRADO:');
            projeto.push(new Projeto(codProjeto, tituloProjeto));
            alert(`Projeto entitulado ${tituloProjeto}. CÓDIGO ${codProjeto} cadastrado com sucesso!`);
        break;

        case '3': 
            //alocar colaborador à um projeto
            let idColaboradorAlocado = prompt('Informe o ID do COLABORADOR a ser ALOCADO');
            idColaboradorAlocado = parseInt(idColaboradorAlocado);
            let idProjetoAlocar = prompt('Informe o PROJETO em que deseja ALOCAR o colaborador:');
            idProjetoAlocar = parseInt(idProjetoAlocar);
            //encontrar o id do projeto e o colaborador (find)
            let projeto = projeto.find(projeto => projeto.id == idProjetoAlocar);
            let colaborador = colaboradores.find(colaborador => colaborador.id == idColaboradorAlocado);
            projeto.colaboradoresAlocados.push(colaborador);
            colaborador.codProjeto = idProjetoAlocar;
            alert(`O colaborador ${colaborador.nome} foi alocado do projeto ${projeto.titulo}`);
        break;

        case '4': 
            //desalocar colaborador 
            let idColaboradorDesalocar = parseInt(prompt('Informe o ID do COLABORADOR que deseja DESALOCAR:'));
            //encontrar projeto e colaborador
            let desalocarColaborador = colaboradores.find(colaborador => colaborador.id == desalocarColaborador);
            let desalocarProjeto = projeto.find(projeto => projeto.id == desalocarProjeto.codProjeto);
            //retira o projeto da classe do colaborador
            desalocarColaborador.codProjeto = 0;
            desalocarProjeto.colaboradoresAlocados = desalocarProjeto.filter(colaborador => colaborador.id != colaboradorADesalocar.id);
            alert(`${idColaboradorDesalocar} desalocado com sucesso do projeto ${desalocarProjeto}`);
        break;

        case '5':
            //marcação de ponto
            let idColaboradorMarcarPonto = prompt(parseInt('Digite seu ID para MARCAR O PONTO:'));
            let colaboradorMarcarPonto = colaboradores.find(colaborador => colaborador.id == idColaboradorMarcarPonto);
            let diaMarcarPonto = parseFloat(prompt('Informe a data'));
            let horaMarcarPonto = parseFloat(prompt('Informe a hora'));
            idColaboradorMarcarPonto.marcarPonto(diaMarcarPonto,horaMarcarPonto);
            alert(`Seu ponto foi marcado no dia ${diaMarcarPonto} às ${horaMarcarPonto}`);
        break;

        case '6':
            //ver lista de colaboradores sem projeto
            let mensagemColaboradorSemprojeto = 'Lista de Colaboradores que não estão alocados em projetos: \n';
            let colaboradoresSemProjeto = colaboradores.filter(colaboradorFiltrar => colaboradorFiltrar.codProjeto == 0);
            for(object of colaboradoresSemProjeto){
                mensagemColaboradorSemprojeto += object.nome + ' ID:  ' + object.id + '\n';
            }
            alert(mensagemColaboradorSemprojeto);
        break;

        case '7':
            //projetos sem colaboradores
            let mensagemProjetoSemColaborador = 'Lista de Projetos sem nenhum colaborador alocado: \n';
            let projetosSemColaboradores = projetos.filtrar(projetosFiltrar => projetosFiltrar.colaboradoresAlocados.length ===0);
            for (object of projetosSemColaboradores) {
                mensagemProjetoSemColaborador +=  object.titulo; 
            }
            alert (mensagemProjetoSemColaborador);
        break;

        case '8':
            //colaboradores que ainda não marcaram o ponto
            let mensagemColaboradorSemMarcar = 'Lista de Colaboradores que não marcaram o ponto: \n';
            let colaboradoresSemMarcacao = colaboradores.filter(colaborador => colaborador.marcacoesPonto.length == 0);
            for(object of colaboradoresSemMarcacao){
                mensagemColaboradorSemMarcar += object.nome + 'ID: ' + object.id + '\n';
            }
            alert(mensagemColaboradorSemMarcar);
        break;

        case '9':
            //encerrar o sistema
            alert('O sistema será encerrado');
        break;

        //usuario digite opção invalida
        default: 
            alert('Digite uma opção válida');
    }
} while (selecionado !=9);