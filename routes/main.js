// main.js

const express = require('express');
const router = express.Router();

// Route for /about
router.get('/about', function(req, res, next) {
    res.render('about.ejs');
});

// Route for /
router.get('/', (req, res) => {
    const featuredProducts = [
        { id: 1, name: 'Red Printed T-Shirt', image: 'product-1.jpg', price: 50, rating: 4 },
        { id: 2, name: 'HRX Sports Shoes', image: 'product-2.jpg', price: 75, rating: 4.5 },
        { id: 3, name: 'HRX Gray Trackpants', image: 'product-3.jpg', price: 45, rating: 4.5 },
        { id: 4, name: 'Blue Printed T-Shirt', image: 'product-4.jpg', price: 55, rating: 4 }
    ];

    const latestProducts = [
        { id: 5, name: 'Puma Gray Sports Shoes', image: 'product-5.jpg', price: 95, rating: 4 },
        { id: 6, name: 'Black Printed T-Shirt', image: 'product-6.jpg', price: 55, rating: 4.5 },
        { id: 7, name: 'HRX Set of 3 Socks', image: 'product-7.jpg', price: 30, rating: 4.5 },
        { id: 8, name: 'Black Fossil Watch', image: 'product-8.jpg', price: 120, rating: 4 }
    ];

    res.render('index', {
        shopData: { shopName: 'Dope Fashion' },
        featuredProducts,
        latestProducts
    });
});

// Export the router object to be used by app.js
module.exports = router;
