/*  Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) */ 

    var listaDeAlunos = [{name: 'joão',idade: 10},{name: 'Bruce', idade: 15},{name: 'tamara', idade: 5}];

    var matriculaAluno = aluno => {
        listaDeAlunos.push(aluno);
    }
    matriculaAluno({name:'tiago', idade:15});
    console.log(listaDeAlunos);

    var listaFiltrada  = listaDeAlunos.find(nome => nome.name === 'tamara');
    console.log(listaFiltrada);

    var listaFiltrada = listaDeAlunos.find (age => age.idade===15);
    console.log(listaFiltrada);