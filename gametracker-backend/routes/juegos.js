import express from 'express';
import Juego from '../models/Juego.js';

const router = express.Router();

// Obtener todos los juegos
router.get('/', async (req, res) => {
  try {
    const juegos = await Juego.find().sort({ createdAt: -1 });
    res.json(juegos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener juegos', error: error.message });
  }
});

// Crear un nuevo juego
router.post('/', async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const juegoGuardado = await nuevoJuego.save();
    res.status(201).json(juegoGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear juego', error: error.message });
  }
});

// Actualizar un juego
router.put('/:id', async (req, res) => {
  try {
    const juegoActualizado = await Juego.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!juegoActualizado) {
      return res.status(404).json({ mensaje: 'Juego no encontrado' });
    }
    res.json(juegoActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar juego', error: error.message });
  }
});

// Eliminar un juego
router.delete('/:id', async (req, res) => {
  try {
    const juegoEliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!juegoEliminado) {
      return res.status(404).json({ mensaje: 'Juego no encontrado' });
    }
    res.json({ mensaje: 'Juego eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar juego', error: error.message });
  }
});

export default router;