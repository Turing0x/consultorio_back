CREATE TABLE PersonalSalud (
	regNum INT PRIMARY KEY NOT NULL,
	nombre TEXT NOT NULL,
	phoneNumber TEXT NOT NULL,
	address TEXT NOT NULL 
);

CREATE TABLE Doctor (
	regNum INT NOT NULL,
	anno_grad INTEGER NOT NULL,
	es_especialista NUMERIC(1, 0) NOT NULL,

	FOREIGN KEY (regNum) REFERENCES PersonalSalud (regNum)
);

CREATE TABLE Nurse (
	regNum INT NOT NULL,
	anno_exp INTEGER NOT NULL,
	category TEXT NOT NULL,

	FOREIGN KEY (regNum) REFERENCES PersonalSalud (regNum)
);