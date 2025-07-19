const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const SECRET = 'your_jwt_secret';

app.use(cors());
app.use(bodyParser.json());

// In-memory user store
const users = [];

// Signup endpoint
app.post('/api/users/signup', (req, res) => {
  const { email, password, location } = req.body;
  if (!email || !password || !location) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  if (users.find(u => u.email === email)) {
    return res.status(409).json({ message: 'User already exists' });
  }
  users.push({ email, password, location });
  res.json({ message: 'User registered successfully' });
});

// Login endpoint
app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ email: user.email, location: user.location }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
}); 