CREATE DATABASE EventFy;

USE EventFy;

CREATE TABLE Organizador(
	Id_Organizador		INT PRIMARY KEY IDENTITY(1, 1),
	Nome_Organizador	CHAR(60) NOT NULL,
	Email_Organizador	VARCHAR(50) NOT NULL,
	Senha_Oganizador	VARCHAR(50) NOT NULL,
	Contato_Organizador	VARCHAR(20) NOT NULL,
	Data_Cadastro		DATETIME
)

CREATE TABLE Evento(
	Id_Evento			INT PRIMARY KEY IDENTITY(1, 1),
	Nome_Evento			VARCHAR(40) UNIQUE NOT NULL,
	Data_Evento			DATE UNIQUE NOT NULL,
	Local_Evento		VARCHAR(50) NOT NULL,
	Horario_Evento		TIME NOT NULL
)

CREATE TABLE Agenda(
	Id_Agenda			INT PRIMARY KEY IDENTITY(1, 1),
	Calendario_Agenda	DATE UNIQUE,
	Horario_Agenda		TIME UNIQUE,
	Descricao_Agenda	VARCHAR(70)
)

CREATE TABLE Feedback(
	Id_Feedback			INT PRIMARY KEY IDENTITY(1, 1),
	Txt_Feedback		VARCHAR(200)
)

CREATE TABLE Relatorio(
	Id_Relatorio		INT PRIMARY KEY IDENTITY(1, 1),
	Nome_Relatorio		VARCHAR(35) NOT NULL,
	Tipo_Relatorio		CHAR(30) NOT NULL,
	Descricao_Relatorio	VARCHAR(500),
	Id_Evento			INT,
	CONSTRAINT Fk_Id_Evento FOREIGN KEY (Id_Evento) REFERENCES Evento(Id_Evento) ON DELETE CASCADE
)

CREATE TABLE Perfil(
	Id_Perfil			INT PRIMARY KEY IDENTITY(1, 1),
	Tipo_Perfil			VARCHAR(30),
	Nome_Perfil			CHAR(50),
	Contato_Perfil		VARCHAR(20),
	Email_Perfil		VARCHAR(50)
)


--Visualizar as Tabelas Criadas
SELECT * FROM sys.tables;