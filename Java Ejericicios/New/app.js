function Animal(tipo,  nombre ,edad){
    this.tipo = tipo;
    this.nombre = nombre;
    this.edad   = edad;
}

const nala = new Animal("Perro","Nala",3);
nala.velocidad = "22Km/h";
console.log(nala);
console.log(nala.velocidad);

const lau = new Animal("Pez","Lau",1);
console.log(lau);
console.log(lau.velocidad)
/*
const animal = {
    tipo: "Perro",
    nombre: "Nala",
    edad: 4
}
console.log(animal);
*/
