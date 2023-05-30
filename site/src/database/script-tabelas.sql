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

CREATE TABLE rankingEP (
	idRank INT PRIMARY KEY auto_increment,
    ep1 INT,
    ep2 INT,
    ep3 INT,
    ep4 INT,
    ep5 INT,
    ep6 INT,
    ep7 INT,
    ep8 INT,
    ep9 INT,
    fkUsuario int,
    CONSTRAINT fkUsuarioRanking foreign key (fkUsuario) references usuario(id),
	CONSTRAINT ep1 CHECK (ep1 IN (0, 1)),
	CONSTRAINT ep2 CHECK (ep2 IN (0, 1)),
	CONSTRAINT ep3 CHECK (ep3 IN (0, 1)),
	CONSTRAINT ep4 CHECK (ep4 IN (0, 1)),
	CONSTRAINT ep5 CHECK (ep5 IN (0, 1)),
	CONSTRAINT ep6 CHECK (ep6 IN (0, 1)),
	CONSTRAINT ep7 CHECK (ep7 IN (0, 1)),
	CONSTRAINT ep8 CHECK (ep8 IN (0, 1)),
	CONSTRAINT ep9 CHECK (ep9 IN (0, 1))
    );

select * from rankingEP where fkUsuario = 1;
select * from usuario;
select * from respostasGrafico;

select 
(select count(opcao1) from respostasGrafico where opcao1 = 1 and personagemFavorito = 'ellie') as Opcao1,
(select count(opcao2) from respostasGrafico where opcao2 = 1 and personagemFavorito = 'ellie') as Opcao2,
(select count(opcao3) from respostasGrafico where opcao3 = 1 and personagemFavorito = 'ellie') as Opcao3,
(select count(opcao4) from respostasGrafico where opcao4 = 1 and personagemFavorito = 'ellie') as Opcao4;

 select
    (select count(*) from respostasGrafico where personagemFavorito = 'ellie') as Ellie,
    (select count(*) from respostasGrafico where personagemFavorito = 'joel') as Joel,
    (select count(*) from respostasGrafico where personagemFavorito = 'tess') as Tess,
    (select count(*) from respostasGrafico where personagemFavorito = 'riley') as Riley;
update usuario set email = 'emailatual' where id = idusuario;
