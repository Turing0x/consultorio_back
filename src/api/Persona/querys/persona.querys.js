const PersonaQuerys = {

  // SELECT Querys
  getAll: 'SELECT * FROM Persona',
  getById: 'SELECT * FROM Persona WHERE CI = @CI',

  // INSERT Querys
  addNewPersona: `INSERT INTO Persona VALUES
    ( @CI, @nombre, @fechaNac, @edad, @sexo, @ocupacion )`,

  // UPDATE Querys
  updatePersona: `UPDATE Persona SET 
    CI = @CI,
    nombre = @nombre,
    fechaNac = @fechaNac,
    edad = @edad,
    sexo = @sexo,
    ocupacion = @ocupacion`,

  // DELETE Querys
  deletePersonaByCI: 'DELETE FROM Persona WHERE CI = @CI'

}

module.exports = PersonaQuerys