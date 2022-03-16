// Archivo character.routes.js dentro de la carpeta routes
const express = require('express');

const Location = require('../models/Location');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const locations = await Location.find().populate('characters');
        return res.status(200).json(locations)
    } catch (error) {
        return next(error)
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newLocation = new Location({
            name: req.body.name,
            loot: req.body.loot,
            characters: []
        });
        const createdLocation = await newLocation.save();
        return res.status(201).json(createdLocation);
    } catch (error) {
        next(error);
    }
});


router.put('/add-character', async (req, res, next) => {
    try {
        const { locationId, characterId } = req.body;

        const updatedLocation = await Location.findByIdAndUpdate(
            locationId,
            { $push: { characters: characterId } },
            { new: true }
        );
        return res.status(200).json(updatedLocation);
    } catch (error) {
        return next(error);
    }
});

module.exports = router;


