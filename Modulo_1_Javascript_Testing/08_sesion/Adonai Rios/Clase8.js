//@->20250402T0913 Programación asíncrona.
//console.log("Inicio");

/*

setTimeout(() => {
   console.log("Esto se ejecuta después de 5 segundos...") 
}, 5000);

*/


/*
console.log("Bienvenido a la página web")
console.log("Primera Tarea")
const promesa = new Promise((resolve , reject) => {
    setTimeout(() => {
        let exito = true;
        if (exito)
        {
            resolve("Segudna tarea con exito ....")   
        }
        else{
            reject("Promesa rechazada");
        }
    }, 3000)
})

console.log("Tercera Tarea")

promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
    .finally( ()=> console.log("Promesa termianda") )
console.log("Cuarta Tarea")
*/

//Asyn await
async function obtenerDatos(){
    try{
        console.log("Obteniendo datos ...")
        let respuesta = await new Promise(resolve =>                      
        setTimeout(() => resolve("Datos recibidos..."), 4000)  )

         console.log(respuesta)

    }catch(error){
        console.log("Error: " , error);
    }
}

obtenerDatos();
console.log("Este mensaje se muestra antes de que lleguen los datos...")



