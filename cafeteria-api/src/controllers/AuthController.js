const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'cafeteria-secreta';

module.exports = {
  login(req, res) {
    const { username, password } = req.body;

    if (username !== 'admin' || password !== 'admin') {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ username: 'admin' }, SECRET, { expiresIn: '1h' });

    return res.json({ token });
  }
};