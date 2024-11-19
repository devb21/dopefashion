# Create database script for Dope Fashion

# Create the database
CREATE DATABASE IF NOT EXISTS dopefashion;
USE dopefashion;

# Create the app user
CREATE USER IF NOT EXISTS 'dope_fashion_app'@'localhost' IDENTIFIED BY 'dopeyyuiop'; 
GRANT ALL PRIVILEGES ON dopefashion.* TO ' dope_fashion_app'@'localhost';
