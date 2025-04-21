console.log("Hola Mundo")

const coche ={
    marca: "Ferrari" ,
    color : "rojo",
    precio:  60000
}

//console.log(coche);

const cocheJson = JSON.stringify(coche);
//console.log(cocheJson);

const jsonRecibo = '{"marca":"Ferrari","color":"rojo","precio":60000}';
console.log(jsonRecibo);

const jsonReciboObjeto = JSON.parse(jsonRecibo);
console.log(jsonReciboObjeto);

console.log(jsonReciboObjeto.marca )