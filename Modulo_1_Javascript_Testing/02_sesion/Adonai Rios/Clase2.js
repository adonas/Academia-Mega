
/*
//@->20250325T0921 Ejercicios de Clase 2 de JS
//Adonai Rios Rodríguez , MEGACABLE Comunicaciones.
//GDL Jalisco México
var edad = 15;   //Variables de tipo global 
//let edad1 = 50;  //Variable con alcance local ...
const edad2 = 20; 

if (edad < 18){
    console.log("Eres menor de edad");
    let dato = "Si soy menor de edad";
    console.log(dato);
    var dato2 = "Claro que soy menor de edad";
}else if(edad >=18 && edad < 65){
    console.log("Eres un adulto");
}else{
    console.log("Eres un adulto mayor");
}
    */
//09:38 Condicionantes con prompts
/*
let numero = prompt("Ingresa un número");
numero = Number(numero);

if (numero >0  ){
    console.log("El número es positivo")
}else if(numero < 0){
    console.log("El número es negativo")
}else{
    console.log("El número es 0")
}
*/
//09:47 Iteraciones
/*
for(let i = 1; i<=5 ; i++){
    console.log(`Iteración numero ${i}`);
}
    */

/*
let contador = 1;
while (contador <= 5){
    console.log(`Iteración numero del while  ${contador}`);
    contador++;
}
    */

let num =  prompt("Ingresa el número");

num = Number(num);
if(num % 2 === 0){
    console.log("El numero es par")
}else{
    console.log("El número es impar")
}

let suma = 0;
for (let i= 1 ; i<=100; i++){
    suma +=i;
}
console.log(`La suma del 1 al 100 es {i}`)

let intentos = 0;
let claveCorrecta = "1234";
let claveIngresada = "";

while (intentos < 3){
    claveIngresada = prompt("Ingresa la contaseña");
    if(claveCorrecta === claveIngresada){
        console.log ("Acceso concedido")
        break;
    }else{
        console.log("Conntraseña incorrecta")
    }
    intentos++;
}

if (intentos ===3){
    console.log("Has agotado tus intentos");
}