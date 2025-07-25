import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middlewares: SIEMPRE antes de las rutas
app.use(cors());
app.use(bodyParser.json());

// ✅ Rutas
app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

// Ruta raíz (opcional)
app.get('/', (req, res) => {
  res.send('API de productos corriendo correctamente');
});

// Middleware para 404
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

