const express = require('express');

const PORT = 3000;
const server = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Upgrade Hub!');
});

router.get('/movies', (req, res) => {
    const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
    res.send(movies);
});

router.get('/movies/:movie', (req, res) => {
    const nameMovie = req.params.movie //Guardo en una variable el valor introducido en la url
    const movies = ['Harry Potter', 'Titanic', 'Back to the Future'];
    //Busco el indice donde se encuentra la coincidencia
    const findMovieIndex = movies.indexOf(nameMovie);
    //Si no hay coincidencia devuelvo mensaje de que no coincide
    if (findMovieIndex === -1) {
        res.send('No se ha encontrado la película');
    }
    res.send(movies[findMovieIndex]);//Envío la respuesta encontrada.
})


server.use('/', router);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
