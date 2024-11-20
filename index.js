// Import express and ejs
var express = require('express');
var ejs = require('ejs');

// Import mysql module
var mysql = require('mysql2');

const bodyParser = require('body-parser');
const path = require('path'); // Add this line to fix the path issue

// Create the express application object
const app = express();
const port = 8000;

// Use body-parser to parse form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import the router
const mainRouter = require('./routes/main');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Using path.join to set views folder

// Mount the mainRouter (imported from main.js) to handle the routes
app.use('/', mainRouter);

// Serve static files (for CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Set up the body parser
app.use(express.urlencoded({ extended: true }));

// Set up public folder (for css and static js)
app.use(express.static(__dirname + '/public'));

// Define the database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'dope_fashion_app',
    password: 'dopeyyuiop',
    database: 'dopefashion'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.db = db;

// Define our application-specific data
app.locals.shopData = { shopName: "Dope Fashion" };

// Load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// Load the route handlers for /users
const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
