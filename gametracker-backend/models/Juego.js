import mongoose from 'mongoose';

const juegoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    required: true
  },
  portadaURL: {
    type: String,
    default: ""
  },
  horasJugadas: {
    type: Number,
    default: 0
  },
  puntuacion: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  completado: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Juego', juegoSchema);