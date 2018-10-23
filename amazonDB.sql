CREATE DATABASE bamazon_DB;
Use database_DB;
CREATE TABLE productsTable(

itemId INT NOT NULL AUTO_INCREMENT,
productName VARCHAR(255) NOT NULL,
departmentName VARCHAR(255) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stockQuantity INT NOT NULL,
PRIMARY KEY (itemId)
);

INSERT INTO productsTable (productName, departmentName, price, stockQuantity)
VALUES("Gel Pens", "Office Products", "16.87", "5"),
("Lead Pencil", "Office Products", "3.45", "11"),
("Zombie Costume", "Costume & Accessories", "23.90", "6"),
("Face Paint", "Arts & Craft", "11.97", "16"),
("Makeup Brushes", "Beauty & Personal Care", "19.99", "158"),
("Scotch Tape", "Office Supplies", "17.99", "24"),
("Mouse Pad", "Office Products", "5.38", "300"),
("Phone Case", "Office Products", "13.95", "266"),
("Face Powder", "Beauty & Personal Care", "7.85", "21"),
("Mittens", "Clothing", "14.99", "63");