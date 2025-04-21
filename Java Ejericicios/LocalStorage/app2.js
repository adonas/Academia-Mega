console.log("App 02 Local Storage")

const nombre = localStorage.getItem('Nombre');
console.log(`El Nombre obtenido de LS es: ${nombre}`);

const productoJson = localStorage.getItem('producto');
console.log(productoJson);
console.log( JSON.parse( productoJson));

const meses = localStorage.getItem('Meses');
console.log( JSON.parse(meses) );
