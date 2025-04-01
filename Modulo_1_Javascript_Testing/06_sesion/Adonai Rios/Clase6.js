/*
//console.log("Código de js para clase 6")
const titulo = document.getElementById("titulo")
const parrafos = document.getElementById("parrafo01")
const botones = document.getElementsByTagName("button");

const primerParrafo = document.querySelector(".memsaje");
const todosLosParrafos = document.querySelectorAll(".memsaje");

console.log(titulo.textContent ) ;

titulo.textContent = "Bienvenidos a mi página web, usando el DOM"


titulo.style.color = blue;
parrafos.style.color = "blue"

primerParrafo.innerHTML = "<strong>Texto en Negritas</strong>";

document.getElementById("cambiarTexto").addEventListener("click", function(){
    document.getElementById("titulo").textContent = "Texto Cambiado con Javascript"
});

document.getElementById("resultado").addEventListener("click",function(){
    document.getlementById("resultado").textContent = "Botón Clickeacdo";
})

const hoverTexto = document.getElementById("hoverTexto");
hoverTexto.addEventListener("mouseover",function(){
    hoverTexto.style.color = "red";
})

hoverTexto.addEventListener("mouseout",function(){
    hoverTexto.style.color = "black";
})


*/
//@->20050331T0932 JSON


console.log("Hola desde el script")
const usuario = {
        nombre:"Adonai" , edad:"46", ciudad:"Guadalajara"
    }    
    //console.log(usuario);

    const usuarioJson = JSON.stringify(usuario);
    console.log("JSON en exto:", usuarioJson);

    //const usuarioObjeto = JSON.parse(usuarioJson)
    //console.log("JSON en Objeto:" , usuarioObjeto);

    

    //En local storage para guardarlo debo de convertirlo en texto ...
    localStorage.setItem("usuario",usuarioJson)

    //Recuperación ..
    const datosGuardados = localStorage.getItem("usuario");
    
    const datosObjeto = JSON.parse(datosGuardados);
    console.log(datosObjeto);
    //De la siguinte manera borramos el elemento del local storage.
    localStorage.removeItem(usuario);

    console.log(`Mi nombre es ${datosObjeto.nombre} y tengo ${datosObjeto.edad} años`)
    console.log(`y vivo en ${datosObjeto.ciudad}`)

    
    //console.log(datosObjeto.nombre)


