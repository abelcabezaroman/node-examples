//Realizamos los requires
const express = require('express');
require('./utils/db')
const characterRoutes = require('./routes/character.routes')

const PORT = 3000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/characters', characterRoutes);

server.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

server.use((error, req, res, next) => {
    return res.status(error.status || 500).json(error.message || 'Unexpected error');
});

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
