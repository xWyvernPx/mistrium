-- Create a new database called 'mistrium'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = N'mistrium'
) 
CREATE DATABASE mistrium
GO
USE mistrium
go
CREATE TABLE [account] (
    [id] INT IDENTITY,
    [email] VARCHAR(50) UNIQUE,
    [password] VARCHAR(100),
    [role] BIT , 
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
)
go
CREATE TABLE [account_detail] (
    [id] INT IDENTITY,
    [name] VARCHAR(100) ,
    [phone] VARCHAR(15),
    [gender] bit DEFAULT 1 ,
    -- address
    [province] INT,
    [district] INT,
    [ward] INT,
    [account_id] INT UNIQUE,

    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (account_id) REFERENCES account(id)
    
)
CREATE TABLE [account_charge] (
    [id] INT IDENTITY,
    [customer_id] VARCHAR(50) DEFAULT NULL,
    [default_payment] VARCHAR(50) DEFAULT NULL,
    [account_id] INT UNIQUE,

    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id)
) 
CREATE table [category] (
    [id] INT IDENTITY,
    [name] varchar(50),
    [slug] VARCHAR(50),

    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id)
)
create table [product] (
    [id] INT IDENTITY,
    [name] VARCHAR(50),
    [stock] int DEFAULT 0 check (stock >= 0),
    [price] INT,
    [desc] text ,
    [thumbnail] varchar(200),
    [category_id] int ,
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (category_id) REFERENCES category(id)
)
create table [product_resource] (
    [id] INT IDENTITY,
    [gltf_url] VARCHAR(150),
    -- TODO : 3d resource field later
    -- [gltf_url] VARCHAR(150),
    -- [gltf_url] VARCHAR(150),
    -- [gltf_url] VARCHAR(150),
    [product_id] int UNIQUE,
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
)
create TABLE [tag] (
    [id] INT IDENTITY,
    [name] varchar(100),
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
)

-- Or create a clustered index on table '[tag]' in schema '[dbo]' in database '[mistrium]'
CREATE /*UNIQUE or CLUSTERED*/ INDEX IX_TAG ON [tag] ([name]) 
GO

create table [product_tag] (
    [id] INT IDENTITY,
    
    [tag_id] int,
    [product_id] int ,
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
)
create table [cart] (
    [id] INT IDENTITY,
    [account_id] int UNIQUE,
    [active] bit DEFAULT 1,
    [total] int DEFAULT 0 check(total>= 0),
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (account_id) REFERENCES account(id)
)
create table [cart_detail](
    [id] INT IDENTITY,
    [product_id] int ,
    [cart_id] int,
    [quantity] int default 0 check(quantity >=0),
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (cart_id) REFERENCES cart(id)
)

create table [order] (
     [id] INT IDENTITY,
    [account_id] int ,
    [ship_date] DATETIME2 DEFAULT NULL,
    [process] int default 1 check(process = 1 or process = 2 or process = 3 or process = 0),
    --1:processing,2: charged , 3: completed, 0: cancel
    --NEW FIELDS 
    [name] VARCHAR,
    [phone] VARCHAR(15),
    [province_id] int ,
    [district_id] int ,
    [ward_id]  int ,
    [details] varchar ,
    [delivery_type] VARCHAR(50)  default 'GHN',
    [delivery_cost] bigint ,
    [method_type] varchar default 'COD',
    [payment_intent_id] VARCHAR,

    [total] int DEFAULT 0 check(total>= 0),
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (account_id) REFERENCES account(id)
)
create table [order_detail] (
    [id] INT IDENTITY,
    [product_id] int ,
    [cart_id] int,
    [quantity] int default 0 check(quantity >=0),
    [active] bit DEFAULT 1,
    [created_at] DATETIME2 DEFAULT GETDATE(),
    [modified_at] DATETIME2 DEFAULT NULL,
    [modified_by] INT DEFAULT NULL,
    [deleted_at] DATETIME2 DEFAULT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (modified_by) REFERENCES account(id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (cart_id) REFERENCES cart(id)
)

-- TODO : Category ->  thumbnail


-- TODO : TRIGGER
-- CREATE TRIGGER [TRIGGER_UPDATE_CART_TOTAL]
-- ON [cart_item]
-- FOR INSERT,UPDATE
-- AS
-- BEGIN

-- END 
 
 SELECT COUNT(*) FROM product WHERE category_id = 1

SELECT COUNT(*) FROM product Where category_id = 1     

insert into product ([name],[desc],[price],[stock],[thumbnail],category_id)
VALUES ('Wood chair','brief',20,100,'https://source.unsplash.com/random',2);

SELECT * FROM product p JOIN category c on p.category_id = c.id WHERE c.slug = ? AND p.name like ?

select * from product

select * from cart


select c.* , p.id as [productId] , p.name , p.[desc] , p.price,p.stock,p.thumbnail,p.category_id  from cart_detail c join product p on c.product_id = p.id
WHERE cart_id = 1 and c.active = 1;

insert into cart (account_id,total)
values (7,0)

SELECT * from cart_detail

select * from product

insert into cart_detail (cart_id,product_id,quantity)
values(1,5,5)

update  cart_detail set quantity =quantity+ 1 where id = 1012

SELECT 