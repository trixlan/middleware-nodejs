const express = require('express');
const router = express.Router();
const Persona = require('../models/persona');

// Crear nueva persona
router.post('/', async (req, res) => {
  try {
    const nueva = await Persona.create(req.body);
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todas las personas
router.get('/', async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
