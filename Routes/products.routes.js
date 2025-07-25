import { Router } from 'express';
const router = Router();

// GET /api/products
router.get('/', (req, res) => {
  res.json({ message: 'Obtener todos los productos' });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
  res.json({ message: `Obtener producto con ID ${req.params.id}` });
});

// POST /api/products/create
router.post('/create', (req, res) => {
  res.json({ message: 'Crear nuevo producto', body: req.body });
});

// DELETE /api/products/:id
router.delete('/:id', (req, res) => {
  res.json({ message: `Eliminar producto con ID ${req.params.id}` });
});

export default router;
