import express from 'express';
import Reseña from '../models/Reseña.js';

const router = express.Router();

// Obtener todas las reseñas
router.get('/', async (req, res) => {
  try {
    const reseñas = await Reseña.find().sort({ createdAt: -1 });
    res.json(reseñas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener reseñas', error: error.message });
  }
});

// Crear una nueva reseña
router.post('/', async (req, res) => {
  try {
    const nuevaReseña = new Reseña(req.body);
    const reseñaGuardada = await nuevaReseña.save();
    res.status(201).json(reseñaGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear reseña', error: error.message });
  }
});

// Eliminar una reseña
router.delete('/:id', async (req, res) => {
  try {
    const reseñaEliminada = await Reseña.findByIdAndDelete(req.params.id);
    if (!reseñaEliminada) {
      return res.status(404).json({ mensaje: 'Reseña no encontrada' });
    }
    res.json({ mensaje: 'Reseña eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar reseña', error: error.message });
  }
});

export default router;