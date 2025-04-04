//console.log("Clase 10 - Patrones de Diseño");

/*
const autoejecutabel =  (function(){
    console.log("Hola Adonas , autoejecución función anónima");
})();
*/

const MathModule =  (function(){
    //Variables privadas
    const PI = 3.1416;

    //funciones privadas
    function cuadrado(x){
        return x*x;
    }
    
    //funcionees públicas
return {
    areaCirculo(radio){
        return PI * cuadrado(radio);
    },
    suma(a,b){
        return a+b;
    }
}

})();

console.log(MathModule.areaCirculo(2) );
console.log( MathModule.suma(2,3) );