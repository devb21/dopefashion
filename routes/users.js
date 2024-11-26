const express = require('express');
const router = express.Router();

// Render Login Page
router.get('/login', (req, res) => {
  res.render('users/login', { pageTitle: 'Login' });
});

// Render Register Page
router.get('/register', (req, res) => {
  res.render('users/register', { pageTitle: 'Register' });
});

// Handle Login Submission
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Authentication logic here
  if (username === 'test' && password === '1234') {
    req.session.user = { username };
    return res.redirect('/');
  }

  res.status(401).send('Invalid login credentials');
});

// Handle Register Submission
router.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Registration logic here (e.g., save to database)
  res.send(`Registration successful for ${username}`);
});

module.exports = router;
