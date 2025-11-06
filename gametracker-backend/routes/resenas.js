import express from 'express';
import Resena from '../models/Resena.js';


const router = express.Router();

// Obtener todas las reseñas
router.get('/', async (req, res) => {
  try {
    const resenas = await Resena.find().sort({ createdAt: -1 });
    res.json(resenas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reseñas', error: error.message });
  }
});

// Crear una nueva reseña
router.post('/', async (req, res) => {
  try {
    console.log("Reseña recibida:", req.body);
    const nuevaResena = new Resena(req.body);
    const resenaGuardada = await nuevaResena.save();
    res.status(201).json(resenaGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear reseña', error: error.message });
  }
});

// Eliminar una reseña
router.delete('/:id', async (req, res) => {
  try {
    const resenaEliminada = await Resena.findByIdAndDelete(req.params.id);
    if (!resenaEliminada) {
      return res.status(404).json({ mensaje: 'Reseña no encontrada' });
    }
    res.json({ mensaje: 'Reseña eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar reseña', error: error.message });
  }
});

export default router;