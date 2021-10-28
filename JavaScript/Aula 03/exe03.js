var array1 = ['JavaScript', 'É maravilhoso', 'Só que não', 'Não mesmo'];
var array2 = ['Desculpa', 'Tiago :D'];

function concatenar (algumaCoisa) {
     concatenado = array1.concat(array2);
     return concatenado;
}
console.log(concatenar(array1,array2));