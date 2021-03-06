/*
    +============================================================+
    |                    CADASTRO DE PRODUTOS                    |
    +============================================================+

    Imaginando que teremos o seguinte produto:
    
    (modelo do objeto)
    {
        id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
        descricao: "",  (string)
        valor: 0        (number)
    }

    Teremos também uma lista de produtos que será uma variável de escopo global (var listaDeProdutos = []);

    Criem um sistema onde seja possível:

    Obs: (utilizem pelo menos 2 arrow functions);

    1) Cadastrar um produto;
        - cuidado para não ter o mesmo id (identificador);

    2) Excluir um produto pelo código (USAR filter);

    3) Encontrar um produto pelo código (USAR find);

    4) Imprimir no console a lista de produtos cadastrados (USAR forEach);


    


    ***EXTRA (NÃO OBRIGATÓRIO)***
    E) Verificar o total de patrimônio da loja (valor total de todos os produtos, USAR reduce);
*/

var listaDeProdutos = [{id: 0, descricao: 'chave', valor: 10}, {id:1, descricao: 'livro', valor:20}];
// var cadastrarProduto = produto => {
//     listaDeProdutos.push(produto);
// }
// cadastrarProduto({id:2, descricao: 'caneta', valor:5});
// console.log(listaDeProdutos);

function encontrarId(codigo) {
    return listaDeProdutos.id ===0;
}
console.log(listaDeProdutos.find(encontrarId));





