// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Cargar variables de entorno del archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// --- Middlewares ---
// Permite que el servidor pueda recibir datos JSON
app.use(express.json());

// Configuración de CORS para permitir peticiones desde el frontend (puerto 3000)
// Esto es crucial para la comunicación entre el frontend y el backend
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// --- Conexión a la Base de Datos ---
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Conectado a MongoDB Atlas'))
    .catch(err => console.error('❌ Error de conexión a MongoDB:', err));

// --- Rutas ---
// (Aquí es donde se incluirán las rutas de 'juegos' y 'reseñas' más adelante)

app.get('/', (req, res) => {
    res.send('Servidor de GameTracker funcionando!');
});


// --- Iniciar el Servidor ---
app.listen(PORT, () => {
    console.log(`🚀 Servidor de GameTracker ejecutándose en el puerto ${PORT}`);
    console.log(`🔗 Accede a http://localhost:${PORT}`);
});