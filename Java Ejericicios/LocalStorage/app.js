
//localStorage.setItem('Nombre','Adonas Rivers');
const producto = {
    nombre:"Monitor de 24 pulgadas",
    precio:300
}

const productoString = JSON.stringify(producto)
console.log(productoString)
localStorage.setItem('producto',productoString)

const meses = ["Enero","Febrero","Marzo"];
const mesesString = JSON.stringify(meses);
localStorage.setItem('Meses', mesesString);