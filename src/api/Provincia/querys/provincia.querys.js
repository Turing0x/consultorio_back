const ProvinciaQuerys = {

  // SELECT Querys
  getAll: 'SELECT * FROM Provincia;',
  getById: 'SELECT * FROM Provincia WHERE codigoSNS = @codigoSNS;',
  getIdOfExistingProvincie: 'SELECT codigoSNS FROM Provincia WHERE nombre = @nombre;',

  getAllMunicipios: 'SELECT * FROM Municipio;',
  getIdOfExistingMunicipio: 'SELECT codigo FROM Municipio WHERE nombre = @nombre;',

  checkIfExistMunicipio: `
    SELECT CASE WHEN COUNT(*) = 0 
      THEN 'true' ELSE 'false' END AS IsEmpty 
        FROM Municipio WHERE nombre = @nombre;`,

  checkIfExistProvincia: `
    SELECT CASE WHEN COUNT(*) = 0 
      THEN 'true' ELSE 'false' END AS IsEmpty 
        FROM Provincia WHERE nombre = @nombre;`,

  // INSERT Querys
  addNewProvincia: `INSERT INTO Provincia VALUES
    ( @codigoSNS, @nombre, @cantConsultorio );`,
  addNewMunicipio: `INSERT INTO Municipio VALUES
    ( @codigo, @nombre, @suProvincia );`,

  // UPDATE Querys
  updateProvincia: `UPDATE Provincia SET 
    codigoSNS = @codigoSNS,
    nombre = @nombre,
    cantConsultorio = @cantConsultorio;`,

  // DELETE Querys
  deleteProvinciaByCodigo: 'DELETE FROM Provincia WHERE codigoSNS = @codigoSNS;',
  deleteMunicipioByCodigo: 'DELETE FROM Municipio WHERE codigo = @codigo;'

}

module.exports = ProvinciaQuerys