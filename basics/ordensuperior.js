// Funciones de orden superior 
// Hight Order Functions
// Funciones que reciben otras funciones como parametros

const myFuctionWithBigName = () => {
    console.log('Esta es una funcion');
}

myFuctionWithBigName();

const myFun = myFuctionWithBigName;

myFun();

const funOne = () => {
    console,log('Ejecuta funcion 1');
}

const funTwo = (name) => {
    console.log('Hola ' + name);
    console.log('Ejecuta funcion 2');
}

funOne();
funTwo(Franki);

const funThree = (otherFunction) => {
    otherFunction();
    console.log('Ejecuta funcion 3');
}

funThree(funOne);
