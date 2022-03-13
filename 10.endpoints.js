const express = require('express');
require('./utils/db')


const PORT = 3000;
const server = express();

const Character = require('./models/Character');

const router = express.Router();

router.get('/characters', async (req, res) => {
    try {
        const characters = await Character.find();
        return res.status(200).json(characters)
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/characters/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const character = await Character.findById(id);
        if (character) {
            return res.status(200).json(character);
        } else {
            return res.status(404).json('No character found by this id');
        }
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/characters/alias/:alias', async (req, res) => {
    const {alias} = req.params;

    try {
        const characterByAlias = await Character.find({ alias: alias });
        return res.status(200).json(characterByAlias);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.get('/characters/age/:age', async (req, res) => {
    const {age} = req.params;

    try {
        const characterByAge = await Character.find({ age: { $gt:age } });
        return res.status(200).json(characterByAge);
    } catch (err) {
        return res.status(500).json(err);
    }
});

server.use('/', router);

server.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});
