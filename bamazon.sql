DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

-- creates table featuring all your favorite items
CREATE TABLE products (
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
	PRIMARY KEY (id),
    item_id INTEGER(10) NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INTEGER(3) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "feral cat", "creature", 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, 'wild dog', 'creature', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, 'rabid raccoon', 'creature', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, 'intuitive muzzle', 'weapon', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, 'bowtie', 'accessory', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, 'large body bag', 'cleanup', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, 'taser', 'weapon', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, 'pepper spray', 'weapon', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, 'gauntlet', 'armor', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, 'machete', 'weapon', 12, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (11, 'toilet paper', 'cleanup', 12, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (12, 'custard buns', 'weapon', 12, 50);

SELECT * FROM products;