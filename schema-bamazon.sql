drop database if exists bamazon_db;
create database bamazon_db;
use bamazon_db;
create table products(
    item_id int (30) not null,
    product_name varchar (30) not null,
    department_name varchar (30) not null,
   price int (30) not null,
   stock_quantity int (30) not null
);
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('1','Apple','Produce','5','1');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('2','Pear','Produce','4','2');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('3','Banana','Produce','6','3');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('4','Grape','Produce','8','2');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('5','tape','Digital','20','5');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('6','tv','Digital','500','10');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('7','computer','Digital','1000','5');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('8','camera','Digital','100','2');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('9','Shirt','Clothes','20','100');
insert into products (item_id,product_name,department_name,price,stock_quantity )VALUES ('10','Coat','Clothes','60','80');
select * from products;
 