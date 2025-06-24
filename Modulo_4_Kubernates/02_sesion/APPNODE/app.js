const express = require('express');

const app = express();

const PORT = process.PORT || 3000;


app.get('/' , (req, rest) => {
    rest.send("Hola mundo les dice Adonai Rios Rodríguez");
});

app.listen(PORT , ()=>
{
    console.log(`Servidor de node escuchando el puerto ${PORT}`)
});

