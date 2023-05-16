-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE tlouhub;

USE tlouhub;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    sobrenome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
    
);

CREATE TABLE ellieGrafico (
	id INT PRIMARY KEY AUTO_INCREMENT,
	opcao1 VARCHAR(50),
	opcao2 VARCHAR(50),
	opcao3 VARCHAR(50),
	opcao4 VARCHAR(50),
    fkUsuario int,
    constraint fkUsuario foreign key (fkUsuario) references usuario(id),
    constraint chkEllie1 check (opcao1 in(0,1)),
    constraint chkEllie2 check (opcao2 in(0,1)),
    constraint chkEllie3 check (opcao3 in(0,1)),
    constraint chkEllie4 check (opcao4 in(0,1))
    );

CREATE TABLE joelGrafico (
	id INT PRIMARY KEY AUTO_INCREMENT,
	opcao1 VARCHAR(50),
	opcao2 VARCHAR(50),
	opcao3 VARCHAR(50),
	opcao4 VARCHAR(50),
    fkUsuario int,
    constraint fkUsuarioJoel foreign key (fkUsuario) references usuario(id),
    constraint chkJoel1 check (opcao1 in(0,1)),
    constraint chkJoel2 check (opcao2 in(0,1)),
    constraint chkJoel3 check (opcao3 in(0,1)),
    constraint chkJoel4 check (opcao4 in(0,1))
    );
    
CREATE TABLE tessGrafico (
	id INT PRIMARY KEY AUTO_INCREMENT,
	opcao1 VARCHAR(50),
	opcao2 VARCHAR(50),
	opcao3 VARCHAR(50),
	opcao4 VARCHAR(50),
    fkUsuario int,
    constraint fkUsuarioTess foreign key (fkUsuario) references usuario(id),
	constraint chkTess1 check (opcao1 in(0,1)),
    constraint chkTess2 check (opcao2 in(0,1)),
    constraint chkTess3 check (opcao3 in(0,1)),
    constraint chkTess4 check (opcao4 in(0,1))
    );
    
    
CREATE TABLE rileyGrafico (
	id INT PRIMARY KEY AUTO_INCREMENT,
	opcao1 VARCHAR(50),
	opcao2 VARCHAR(50),
	opcao3 VARCHAR(50),
	opcao4 VARCHAR(50),
    fkUsuario int,
    constraint fkUsuarioRiley foreign key (fkUsuario) references usuario(id),
    constraint chkRiley1 check (opcao1 in(0,1)),
    constraint chkRiley2 check (opcao2 in(0,1)),
    constraint chkRiley3 check (opcao3 in(0,1)),
    constraint chkRiley4 check (opcao4 in(0,1))
    );

select * from usuario;
select * from ellieGrafico;

select
(select count(*) from ellieGrafico) as Ellie,
(select count(*) from joelGrafico) as Joel,
(select count(*) from tessGrafico) as Tess,
(select count(*) from rileyGrafico) as Riley;

select 
(select count(opcao1) from ellieGrafico where opcao1 = 1) as Opcao1,
(select count(opcao2) from ellieGrafico where opcao2 = 1) as Opcao2,
(select count(opcao3) from ellieGrafico where opcao3 = 1) as Opcao3,
(select count(opcao4) from ellieGrafico where opcao4 = 1) as Opcao4;


select 
(select count(opcao1) from joelGrafico where opcao1 = 1) as Opcao1,
(select count(opcao2) from joelGrafico where opcao2 = 1) as Opcao2,
(select count(opcao3) from joelGrafico where opcao3 = 1) as Opcao3,
(select count(opcao4) from joelGrafico where opcao4 = 1) as Opcao4;


select 
(select count(opcao1) from tessGrafico where opcao1 = 1) as Opcao1,
(select count(opcao2) from tessGrafico where opcao2 = 1) as Opcao2,
(select count(opcao3) from tessGrafico where opcao3 = 1) as Opcao3,
(select count(opcao4) from tessGrafico where opcao4 = 1) as Opcao4;

select 
    (select count(opcao1) from rileyGrafico where opcao1 = 1) as Opcao1,
    (select count(opcao2) from rileyGrafico where opcao2 = 1) as Opcao2,
    (select count(opcao3) from rileyGrafico where opcao3 = 1) as Opcao3,
    (select count(opcao4) from rileyGrafico where opcao4 = 1) as Opcao4;
    
select * from joelGrafico;
select * from tessGrafico;
select * from rileyGrafico;
