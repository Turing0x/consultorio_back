const ClinicQuerys = {

  // SELECT Querys
  getAll: 'SELECT * FROM Consultorio;',
  getById: 'SELECT * FROM Consultorio WHERE codigo = @codigo;',

  getInfoToSign:
    `SELECT Consultorio.nombre, Consultorio.direccion, Municipio.nombre AS nombreM
      FROM Consultorio
        JOIN Municipio ON 
          Consultorio.suMunicipio = Municipio.codigo`,
  
  checkPassword: `
    SELECT CASE WHEN password = @password 
      THEN 'true' ELSE 'false' END 
        FROM Consultorio WHERE nombre = @nombre;`,

  getIdOfExistingClinic: 'SELECT codigo FROM Consultorio WHERE nombre = @nombre;',

  checkIfExistClinic: `
    SELECT CASE WHEN COUNT(*) = 0 
      THEN 'true' ELSE 'false' END AS IsEmpty 
        FROM Consultorio WHERE nombre = @nombre;`,

  // INSERT Querys
  addNewClinic: `INSERT INTO Consultorio VALUES
    ( @codigo, @nombre, @direccion, @tipo, @tipoLocal, @suMunicipio, @password );`,

  // UPDATE Querys
  updateClinic: `UPDATE Consultorio SET
    nombre = @nombre, password = @password, direccion = @direccion, tipo = @tipo,
      tipoLocal = @tipoLocal, suMunicipio = @suMunicipio 
        WHERE codigo = @codigo`,

  // DELETE Querys
  deleteClinicBycodigo: 'DELETE FROM Consultorio WHERE codigo = @codigo;'

}

module.exports = ClinicQuerys