
function obtenerUsuario(id){
    try{
        if ( typeof id != "number" ) throw  new Error("El id debe de ser numérico");
        const usuarios = {1:"Adonai" , 2:"Dina" , 3:"Damaris"};
        
        if (!usuarios[id]) throw new Error("Usuario no localizado");
        
        return `Uruario encontrado ${usuarios[id]}`
        //console.log(usuarios);

    }catch(error){
        console.log("Error: ", error.message  );
        return null;

    }
}
console.log( obtenerUsuario(1) );
console.log( obtenerUsuario(2) );
console.log( obtenerUsuario(3) );
console.log( obtenerUsuario(4) );
console.log( obtenerUsuario("a") );




/*
console.log("Clase 07 Java Script Liderly")

try{
    let resultado = 10/1;
    console.log(resultado);
    throw new Error("Este es un error personalizado")
}catch(error){
    console.error("Se ha producido un error", error.message);            
}finally{
    console.log("Esté codigo se ejecuta siempre");                        
}

console.log("Este es un mensaje")
console.error("Esto es un error")
console.warn("Esta es una advertencia")
*/
