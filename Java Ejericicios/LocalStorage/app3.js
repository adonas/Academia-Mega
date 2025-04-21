console.log("Eliminar Elementos de Local Storage")

localStorage.removeItem('Nombre');

//Actualizar un registro
const mesesArray =  JSON.parse( localStorage.getItem('Meses'));
console.log(mesesArray)
mesesArray.push("Abril");
console.log(mesesArray)

localStorage.setItem('Meses' , JSON.stringify(mesesArray) );

//ELimiar el contenido de todo el local storage
localStorage.clear();