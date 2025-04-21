console.log("Async Await")
 let nombre = null;
function actualizarNombre(){
    //, reject
    console.log("Actualización Empezada")
    return new Promise((resolve )  =>{
        setTimeout(() => {
            console.log("Actualización Completada")
            resolve("Adonai") ;    
        }, 1000);
        //reject('Error')
    } )
}

async function saludar(){
    nombre = await actualizarNombre();
    console.log("Actualización Finalizada")
    console.log(`Hola me llamo: ${nombre}`);
    
}

saludar();