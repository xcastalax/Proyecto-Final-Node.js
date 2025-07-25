import { Router } from 'express';
const router = Router();

// POST /auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validación fake por ahora
  if (email === 'admin@admin.com' && password === '123456') {
    res.json({ token: 'FAKE-JWT-TOKEN' });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

export default router;
