// Archivo character.routes.js dentro de la carpeta routes
const express = require('express');

const Character = require('../models/Character');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const characters = await Character.find();
        return res.status(200).json(characters)
    } catch (error) {
        return next(error)
    }
});

router.post('/', async (req, res, next) => {        console.log('##ABEL## >>  >>  ', req.body);


    try {
        // Crearemos una instancia de character con los datos enviados
        const newCharacter = new Character({
            name: req.body.name,
            age: req.body.age,
            alias: req.body.alias,
        });

        // Guardamos el personaje en la DB
        const createdCharacter = await newCharacter.save();
        return res.status(201).json(createdCharacter);
    } catch (error) {
        // Lanzamos la función next con el error para que lo gestione Express
        next(error);
    }
});

module.exports = router;

