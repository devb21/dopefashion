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