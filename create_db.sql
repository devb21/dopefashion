# Create database script for Dope Fashion

# Create the database
CREATE DATABASE IF NOT EXISTS dopefashion;
USE dopefashion;

# Create the app user
CREATE USER IF NOT EXISTS 'dope_fashion_app'@'localhost' IDENTIFIED BY 'dopeyyuiop'; 
GRANT ALL PRIVILEGES ON dopefashion.* TO ' dope_fashion_app'@'localhost';




CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    hashedPassword VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


ALTER TABLE products ADD COLUMN is_featured TINYINT(1) DEFAULT 0;

UPDATE products SET is_featured = 1 WHERE id IN (1, 2, 3);



INSERT INTO products (name, price, description, image)
VALUES
    ('Product 1', 19.99, 'Description for Product 1', 'product-1.jpg'),
    ('Product 2', 29.99, 'Description for Product 2', 'product-2.jpg'),
    ('Product 3', 39.99, 'Description for Product 3', 'product-3.jpg'),
    ('Product 4', 49.99, 'Description for Product 4', 'product-4.jpg'),
    ('Product 5', 59.99, 'Description for Product 5', 'product-5.jpg'),
    ('Product 6', 69.99, 'Description for Product 6', 'product-6.jpg'),
    ('Product 7', 79.99, 'Description for Product 7', 'product-7.jpg'),
    ('Product 8', 89.99, 'Description for Product 8', 'product-8.jpg'),
    ('Product 9', 99.99, 'Description for Product 9', 'product-9.jpg'),
    ('Product 10', 109.99, 'Description for Product 10', 'product-10.jpg'),
    ('Product 11', 119.99, 'Description for Product 11', 'product-11.jpg'),
    ('Product 12', 129.99, 'Description for Product 12', 'product-12.jpg');




