// funciones en Javascript 

// función sin parametros y sin retorno 
function saluda(){
    console.log('Hola!');

}
saluda();
// funcion con parametros y sin retorno
function addOne(num){
    console.log(`el ${ num } + 1 = ${ num + 1 }`);

}
addOne(15);

// funcion con parametros y con retorno
function suma(num1, num2){
    return num1 + num2;
}
const result = suma(12, 34)
console.log(result);

// funciones como constantes 
// funciones anónimas
const resta = function (num1, num2){
    return num1 - num2;
}
const resultado = resta(12, 2);
console.log(resultado);

// Funciones de Flecha Arrow Funstions 
(param1, param2) => {
    // Code
    //return
}

const duplica = (num) => {
    return num * 2;

}
const multiplica = (num1, num2) => {
    console.log('Multiplica números');
    return num1 * num2;
}
const doble = duplica (16);
console.log(doble);

const resultM = multiplica(13, 26);
console.log(resultM);

//Simplificando Arrow Functions 
let cambiaMinusculas = (word) => {
    return word.toLowerCase();
}

// Si solo en un único parámetro se pueden omitir parentesis
// Si la única línea es el return se pueden omitir llaves y return 
cambiaMinusculas = word => word.toLowerCase();
