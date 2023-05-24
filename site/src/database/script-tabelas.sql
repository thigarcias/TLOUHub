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

CREATE TABLE respostasGrafico (
	id INT PRIMARY KEY AUTO_INCREMENT,
    personagemFavorito VARCHAR(50) NOT NULL, 
	opcao1 VARCHAR(50),
	opcao2 VARCHAR(50),
	opcao3 VARCHAR(50),
	opcao4 VARCHAR(50),
    fkUsuario int,
    CONSTRAINT fkUsuario foreign key (fkUsuario) references usuario(id),
	CONSTRAINT chkPersonagem CHECK (personagemFavorito IN ('ellie', 'joel', 'tess', 'riley')),
    CONSTRAINT chkOpcao1 CHECK (opcao1 IN (0, 1)),
	CONSTRAINT chkOpcao2 CHECK (opcao2 IN (0, 1)),
	CONSTRAINT chkOpcao3 CHECK (opcao3 IN (0, 1)),
	CONSTRAINT chkOpcao4 CHECK (opcao4 IN (0, 1))
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
select * from respostasGrafico;


select 
(select count(opcao1) from respostasGrafico where opcao1 = 1 and personagemFavorito = 'ellie') as Opcao1,
(select count(opcao2) from respostasGrafico where opcao2 = 1 and personagemFavorito = 'ellie') as Opcao2,
(select count(opcao3) from respostasGrafico where opcao3 = 1 and personagemFavorito = 'ellie') as Opcao3,
(select count(opcao4) from respostasGrafico where opcao4 = 1 and personagemFavorito = 'ellie') as Opcao4;

