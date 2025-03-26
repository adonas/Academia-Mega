//Adonai Rios Rodríguez
//@->20250326T0920
//MEGACABLE Comunicaciones
//GDL Jalisco, México

//Funciones En JScript

//Declarativas
function restar(a,b){
    return a-b;
};
//console.log(restar(10,2));

//Anónimas
const sumar = function(a,b){
    return a+b;    
};
//console.log(sumar(10,2));

//Funciones flecha
/*
const multiplicar = (a,b) => a*b;
console.log(multiplicar(10,2));
*/

//Ejemplo de función declarativa
//saludar("Adonai");
function saludar(nombre){
    console.log(`Hola ${nombre}, ejemplo de función declarativa`)
}

//Ejemplo de función Anónima
let saludarAnonima = function(nombre){
    console.log(`Hola, ${nombre} , ejemplo de función anónima`);
}
//saludarAnonima("Adonas 2")

//Ejempl de función flecha
let saludarFlecha = (nombre) => console.log(`Hola, ${nombre}, ejemplo de función flecha`)
//saludarFlecha("Adonas 3");


const sumar2 = (a,b)=> {
    let resultado = a+b;
    return resultado;
}
//console.log(sumar2(3,7));

//09:34 Scope de variables ...
let mensajeGlobal = "Hola desde fuera";
let numero;

function ejemploScope(numero){    
    numero ++;
    let mensajeLocal = "Hola desde dentro";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
    console.log(numero);
}
/*
numero = 2;
ejemploScope(numero);
console.log(mensajeGlobal);
//console.log(mensajeLocal);
console.log(numero);
*/

//09:45Closures ...

function contador(){
    let cuenta = 0;
    return function(){
        cuenta ++;
        return cuenta;
    }
};

const incrementar = contador(); //aquí inicializa cuenta  = 0
console.log(incrementar()); //aquí se va a la línea 70 ....
console.log(incrementar());
console.log(incrementar());



//09:55 Ejercicio
//Crea una función que devuelve otra función que multiplica por un número específico

function multiplicador(factor){
    return function(numero){
        return numero * factor;
    }
}
const duplicar = multiplicador(2);
console.log(duplicar(5));

const triplicador = multiplicador(3);
console.log(triplicador(5));

//Entrega de actividad ...., lo que estuvimos revisando en clase !!!



