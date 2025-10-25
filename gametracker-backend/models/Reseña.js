import mongoose from 'mongoose';

const reseñaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Juego',
    required: true
  },
  juegoTitulo: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Reseña', reseñaSchema);