const express = require('express');

const PORT = 3000;
const server = express();

// Aquí añadiremos el nuevo código, dejando el controlador de errores en último lugar

// Crearemos un middleware para cuando no encontremos la ruta que busquemos
server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error); // Lanzamos la función next() con un error
});

// Si se lanza la función

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
