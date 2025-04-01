
        /*
            20250401T1424 Ejercicio correspondiente a la clase 06 de JS con Liderly
            Adonai Rios Rodríguez
            MEGACABLE Comunicaciones
            GDL Jalisco, México

         */
        function guardarNota(){
            //Función que guarda una nota en el localstorage
            const texto = document.getElementById("nota").value.trim();
            if ( texto === "" ) return;

            let notas = JSON.parse( localStorage.getItem("notas")) || [] ;
            notas.push(texto);
            localStorage.setItem("notas",JSON.stringify(notas));                        

            localStorage.setItem("notas", JSON.stringify(notas) );            
            document.getElementById("nota").value= "";            
            mostrarNotas();
            
            document.getElementById("nota").autofocus();

        }

        function mostrarNotas(){
            //Función que obtiene el json del localstorage y los presenta en una lista
            const lista = document.getElementById("listaNotas");
            lista.innerHTML = "";
            let notas = JSON.parse(localStorage.getItem("notas") ) || [];

            console.log(notas);
            
            notas.forEach((nota , index) => {
                const li = document.createElement("li");
                console.log(`${nota}` )
                li.innerHTML = `${nota} <span style="color:red" onclick="borrarNota(${index})">X</span>`;
                
                lista.appendChild(li);
            })

            //let notas = [];
        }

        function borrarNotas(){
            //Función que elimina el contenido en localstorage de json con valor notas
            localStorage.removeItem("notas");
            mostrarNotas();
        }
        
        function borrarNota(index){
            //Eliminación del elemnento seleccionado 
            let notas = JSON.parse(localStorage.getItem("notas")) || [];
            console.log(index);            
            notas.splice(index,1);
            //console.log(notas);
            localStorage.setItem("notas", JSON.stringify(notas) );
            mostrarNotas();
        }
        
        mostrarNotas();
    