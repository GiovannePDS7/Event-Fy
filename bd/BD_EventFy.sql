CREATE DATABASE EventFy;

USE EventFy;

CREATE TABLE Organizador(
	Id_Organizador		  INT PRIMARY KEY IDENTITY(1, 1),
	Nome_Organizador	  CHAR(60) NOT NULL,
  Foto_Organizador    VARBINARY(1000),
	Email_Organizador	  VARCHAR(50)  UNIQUE NOT NULL,
	Senha_Organizador	  VARCHAR(300) NOT NULL,
	Contato_Organizador	VARCHAR(20),
	Data_Cadastro		    DATETIME
)

CREATE TABLE Evento(
	Id_Evento			      INT PRIMARY KEY IDENTITY(1, 1),
	Nome_Evento			    VARCHAR(40) UNIQUE NOT NULL,
	Data_Evento			    DATE UNIQUE NOT NULL,
	Local_Evento		    VARCHAR(50) NOT NULL,
	Horario_Evento		  TIME NOT NULL
)

CREATE TABLE Agenda(
	Id_Agenda			      INT PRIMARY KEY IDENTITY(1, 1),
	Calendario_Agenda	  DATE UNIQUE,
	Horario_Agenda		  TIME UNIQUE,
	Descricao_Agenda	  VARCHAR(70)
)

CREATE TABLE Feedback(
	Id_Feedback			    INT PRIMARY KEY IDENTITY(1, 1),
	Txt_Feedback		    VARCHAR(200) NOT NULL,
  Id_Evento			      INT,
	CONSTRAINT Fk_Id_Evento FOREIGN KEY (Id_Evento) REFERENCES Evento(Id_Evento) ON DELETE CASCADE
)

CREATE TABLE Ingresso(
	Id_Ingresso         INT PRIMARY KEY IDENTITY(1, 1),
  Nome_Ingresso       CHAR(60) NOT NULL,
  CPF_Ingresso        VARCHAR(15) NOT NULL,
  Tipo_Ingresso       VARCHAR(30) NOT NULL,
  Data_Compra         DATE NOT NULL,
  Data_Evento         DATE UNIQUE NOT NULL,
  CONSTRAINT Fk_Data_Evento FOREIGN KEY (Data_Evento) REFERENCES Evento(Data_Evento) ON DELETE CASCADE
)

CREATE TABLE Perfil(
	Id_Perfil			      INT PRIMARY KEY IDENTITY(1, 1),
	Tipo_Perfil			    VARCHAR(30) NOT NULL,
	Nome_Perfil			    CHAR(50) NOT NULL,
	Contato_Perfil		  VARCHAR(20) NOT NULL,
	Email_Perfil		    VARCHAR(50) NOT NULL
)

CREATE TABLE Colaborador(
  Id_Colaborador      INT PRIMARY KEY IDENTITY(1, 1),
  Tipo_Colaborador    VARCHAR(70) NOT NULL,
  Funcao_Colaborador  VARCHAR(100) NOT NULL,
  Nome_Colaborador    CHAR(50) NOT NULL, 
)

CREATE TABLE Cliente(
  Id_Cliente          INT PRIMARY KEY IDENTITY(1, 1),
  Nome_Cliente        CHAR(60) NOT NULL,
  Data_Nasc_Cliente   DATE NOT NULL,
  Email_Cliente       VARCHAR(50) NOT NULL,
  Contato_Cliente     VARCHAR(20) NOT NULL
)





--Visualizar as Tabelas Criadas
SELECT * FROM sys.tables;
