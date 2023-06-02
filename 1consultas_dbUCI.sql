CREATE TABLE PersonalSalud (
	regNum VARCHAR(50) PRIMARY KEY NOT NULL,
	nombre TEXT NOT NULL,
	phoneNumber TEXT NOT NULL,
	address TEXT NOT NULL,
	suConsultorio TEXT NOT NULL
);

CREATE TABLE Doctor (
	regNum VARCHAR(50) NOT NULL,
	anno_grad INTEGER NOT NULL,
	es_especialista NUMERIC(1, 0) NOT NULL
);

CREATE TABLE Nurse (
	regNum VARCHAR(50) NOT NULL,
	anno_exp INTEGER NOT NULL,
	category TEXT NOT NULL
);

DROP TABLE PersonalSalud;
DROP TABLE Doctor;
DROP TABLE Nurse;