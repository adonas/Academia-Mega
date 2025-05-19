--drop database TiendaDB
--create database TiendaDB;
--drop table Productos
go
create table dbo.Productos 
(
 id int identity (1,1) primary key
 , Nombre nvarchar(100) not null
 , Precio decimal (18,2) not null
)

insert into Productos (Nombre , Precio) values ('Iphone 16 Pro 2',25000.00)
insert into Productos (Nombre , Precio) values ('Chayomi Pro 2',15000.00)

select * from Productos

INSERT INTO Productos (Nombre, Precio) OUTPUT INSERTED.Id VALUES ('Chayomi Pro 30', 40000.0)
UPDATE PRODUCTOS SET Nombre = 'Chayomi Pro 2' , Precio = 40400.0 OUTPUT inserted.id WHERE Id = 6

--DELETE FROM Productos  OUTPUT deleted.Id where id = 4

use TiendaDB

/*
20639
*/