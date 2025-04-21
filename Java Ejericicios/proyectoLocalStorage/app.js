//console.log("Proyecto Local Storage")
//document.getElementById("formularioNotas").addEventListener("submit", function(e){
//e.preventDefault();

//Variables
const formulario = document.getElementById("formulario");
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];
//Event listeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet    
    formulario.addEventListener("submit",agregarTweet);

    //Cuando el documneto está listo
    
    document.addEventListener('DOMContentLoaded',()=>{
        tweets = JSON.parse(localStorage.getItem('tweets') ) || [];
        console.log(tweets);
        crearHTML();
    });
    
}
//Funciones
function agregarTweet(e){
    e.preventDefault();
    //console.log("Agregando tweet")
    //Tetx area donde el usuario escribe..
    const tweet = document.querySelector('#tweet').value;
    
    //console.log(tweet);
    

    if ( tweet === '' ){
        mostrarError("Un mensaje no puede ir vacío");
        return; //Ejecuta que se ejecuten más líneas de código
    }
    //Añadir al arreglo de tweets
    const tweetObj = {
        id: Date.now(),
        tweet
        //Cuando la llave y la variable son iguales, podemos dejar sólo la primer declaración , tweet: tweet
        // tweet

    }
    tweets = [...tweets , tweetObj];
    //Una vez agregado, creamos el HTML
    crearHTML();
    formulario.reset();   

}


function mostrarError(error){
    //console.log(mensaje);
    const mensajeError = document.createElement('p');
    mensajeError.textContent =error; 
    //mensajeError.classList.add('error');

    //Insertar en el contenido ..
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}
//Muestra un listado de los tweets
function crearHTML(){
    limpiarHTML();
    if (  tweets.length > 0 ){
        tweets.forEach(tweet =>{
            //Agregar botón para eliminar
            const btnELiminar = document.createElement('a');
            btnELiminar.classList.add('borrar-tweet');
            btnELiminar.innerText = 'X';
            //Añadir función de elimianr
            btnELiminar.onclick=() =>{
                borrarTweet(tweet.id );
            }

            //Crear el HTML
            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet.tweet ;

            //Asignar el botón
            li.appendChild(btnELiminar);
            listaTweets.appendChild(li);
        });
        
    }
    sincronizarStorage();
    
}

function sincronizarStorage(){
    localStorage.setItem( 'tweets' , JSON.stringify(tweets) );
}

function limpiarHTML(){
    while ( listaTweets.firstChild ){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}
function borrarTweet(id){
    console.log('Borrando tweet ..', id)
    tweets = tweets.filter(tweet => tweet.id  !== id);
    console.log(tweets);
    crearHTML();
}