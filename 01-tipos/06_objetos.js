// Personaje de TV

let nombre = 'Seya';
let anime = 'Los Caballeros del Sodiaco';
let edad = 25;

 let personaje = {
    nombre: 'Seya',
    anime: 'Los Caballeros del Sodiaco',
    edad: 25,
 };
 console.log(personaje);
 console.log(personaje.anime);
 console.log(personaje['nombre']);

 // cambiar dato de variable

 personaje.edad = 30;

 personaje['edad'] = 40

 // elimina una propiedad de un objeto

 delete personaje.anime;
 console.log(personaje);

