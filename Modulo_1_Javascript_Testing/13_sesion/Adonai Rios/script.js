
console.log("Scripts clase 13");
    //Prueba Unitaria
    function suma(a,b){
        return a+b;

    }
    console.log(suma(2,3))
    console.assert(suma(2,3)===5 , "Error en la suma")

    document.getElementById("form").addEventListener("submit",(e) =>{
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        document.getElementById("resultado").textContent=`Hola ${nombre}`;
    })
    
    /*
    //Prueba de integración
    try{
        fetch("api...").then(res=> res.json()).then(data=> mostrarUsuario(data))
    }catch (error){
        throw new error("Erro al invocar")
    }
        */


    
    

        
