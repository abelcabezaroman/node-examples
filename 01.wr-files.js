// //Requerimos el paquete
// const fs = require('fs');
//
// // Creamos un array de objetos que representan personas
// const avengers = [
//     {
//         name: 'SpiderMan',
//         power: 70
//     },
//     {
//         name: 'Dr.Strange',
//         power: 80
//     },
//     {
//         name: 'Hulk',
//         power: 110
//     }
// ];
//
// // Transformamos el array a un JSON en formato String
// const avengersJson = JSON.stringify(avengers);
//
// // Creamos el archivo people.json y dejamos que el callback
// // nos avise cuando se complete la escritura.
// fs.writeFile('avengers.json', avengersJson, () => {
//     console.log('avengers.json created!');
// })
const fs = require('fs');

// Leemos un archivo en la dirección dada y el callback es invocado
// cuando se termina de leer y procesar el archivo
fs.readFile('avengers.json', (err, avengers) => {
    if (err) {
        // Si recibimos un error en el callback, lo mostraremos en consola
        console.log('There was an error reading the file!');
    } else {
        // Si obtenemos los datos y no un error, habrá que transformar
        // la información con JSON.parse() para poder mostrarla
        const parsedAvengers = JSON.parse(avengers);
        console.log(parsedAvengers);
    }
});
