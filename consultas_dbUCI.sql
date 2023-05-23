-- Insertar un nuevo registro en la tabla PersonalSalud
INSERT INTO PersonalSalud (regNum, nombre, phoneNumber, address)
VALUES (1, 'Juan Pérez', '123-456-7890', 'Calle Falsa 123');

-- Insertar un nuevo registro en la tabla Doctor, utilizando el mismo valor de regNum
INSERT INTO Doctor (regNum, anno_grad, es_especialista)
VALUES (1, 2010, 1);

SELECT * FROM PersonalSalud;