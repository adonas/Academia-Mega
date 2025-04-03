/*
let student = {"name":"Adonai" , "yearOfBirth":1978 , "country":"Mexico"};
student.id="93207696"
student.name = "Damaris";

student1 = {"name":"Adonai" , "age":46 };
student2 = {"name":"Damaris" , "age":45 };

students = [ student1 , student2 ];

students.lenght();

student3 = {"name":"Dina" , "age":48 };
students.push(student3);

function bienvenido(){
     return "Hola bienvenido a la sección de funciones";

}
let mensaje = bienvenido();
console.log(mensaje);
//Parte de una función
//Parámetros (entradas) , código , salida (return)

*/
//32F = 0c , 68F = 20C
//C = (F-32) * 5/9
/*
function convertirFarenheitaCelsius(gradoFarenheit){
    let celius = (gradoFarenheit-32) / (5/9);
    return celius;
}
let temperatura1 = convertirFarenheitaCelsius(32);
let temperatura2 = convertirFarenheitaCelsius(68);

//console.log(temperatura1);
//console.log(temperatura2);

function calcularEdad(yearNacimiento){
    return 2025-yearNacimiento;
}

function calcularTiempoJubilacion(yearNacimiento , name){
    //65-edad
    let edad = calcularEdad(yearNacimiento);    
    let yearJubilacion = 65-edad;
    //return yearJubilacion;
    console.log(`A ${name} le faltan ${yearJubilacion} años para poder jubilarse`);
}

calcularTiempoJubilacion(1978 , "Adonai");

let nombre;

let prueba = function(n){
    return "Hola " + n;
}
nombre = null;
console.log(prueba(nombre));
*/

//Argumentos por defecto
let sumar = function( a , b=2 , c = 2 ){
    return a+b + c;
}
//console.log( sumar(10 , 10  ) );

//Template string es el uso de la comilla invertida y con ${variable}


let calcularScore = function(nombre , pos , neg){
    let porcentajePositivas = (pos/100) * 100;
    let porcentajeNegativas = (neg/100) * 100;
    let score = "";

    if ( porcentajePositivas > 90 ){
        score = "A";
    }else if(porcentajePositivas >= 70){
        score = "B";
    }else if( porcentajePositivas >= 45){
        score = "C";
    }else{
        score = "C";
    }
    return `${nombre} tiene el score ${score} , Positivas: ${porcentajePositivas} , Negativas: ${porcentajeNegativas}`;
}
var resultado = calcularScore("Adonai", 72 , 28);
console.log(resultado);