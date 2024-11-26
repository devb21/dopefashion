const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session'); // For session management
require('dotenv').config(); // For environment variables

// Create the express application object
const app = express();
const port = 8000;

// Middleware to parse form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session middleware
app.use(
  session({
    secret: 'secret-key', // Replace with a secure key
    resave: false,
    saveUninitialized: true,
  })
);

// Set the view engine to EJS and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'dope_fashion_app',
  password: process.env.DB_PASSWORD || 'dopeyyuiop',
  database: process.env.DB_NAME || 'dopefashion',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
  console.log('Connected to database');
});

// Attach the database to req for easy access (optional)
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Application-specific data
app.locals.shopData = { shopName: 'Dope Fashion' };

// Main Route: Home
app.get('/', (req, res) => {
  // Query to fetch featured products
  const featuredQuery = 'SELECT * FROM products WHERE is_featured = 1 LIMIT 4';
  
  db.query(featuredQuery, (err, featuredProducts) => {
    if (err) {
      console.error('Error fetching featured products:', err);
      return res.status(500).send('Error fetching featured products');
    }

    // Query to fetch latest products (ignoring featured products)
    const latestQuery = 'SELECT * FROM products WHERE is_featured = 0 ORDER BY created_at DESC LIMIT 4';
    
    db.query(latestQuery, (err, latestProducts) => {
      if (err) {
        console.error('Error fetching latest products:', err);
        return res.status(500).send('Error fetching latest products');
      }

      // Render the index page with both featured and latest products
      res.render('index', {
        user: req.session.user, // Pass session user data to the view
        featuredProducts: featuredProducts, // Pass featured products to the view
        latestProducts: latestProducts // Pass latest products to the view
      });
    });
  });
});

// Routes for users (login/logout/register)
const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
