const DbConnect = require('../../../database/connections');
const sql = require('mssql');

const FuncSavePersona = async( query = '', CI, nombre, fechaNac, edad, sexo, ocupacion, suEnfermedad ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('CI', sql.VarChar, CI)
    .input('nombre', sql.VarChar, nombre)
    .input('fechaNac', sql.VarChar, fechaNac)
    .input('edad', sql.Int, edad)
    .input('sexo', sql.VarChar, sexo)
    .input('ocupacion', sql.VarChar, ocupacion)
    .input('suEnfermedad', sql.VarChar, suEnfermedad)
    .query( query )

  return result

}

const FuncUpdatePersona = async( query = '', CI, nombre, fechaNac, edad, sexo, ocupacion, suEnfermedad ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('CI', sql.VarChar, CI)
    .input('nombre', sql.VarChar, nombre)
    .input('fechaNac', sql.VarChar, fechaNac)
    .input('edad', sql.Int, edad)
    .input('sexo', sql.VarChar, sexo)
    .input('ocupacion', sql.VarChar, ocupacion)
    .input('suEnfermedad', sql.VarChar, suEnfermedad)
    .query( query )

  return result

}

const FuncDeletePersona = async( query = '', CI ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('CI', sql.VarChar, CI)
    .query( query )

  return result

}

module.exports = {
  FuncSavePersona,
  FuncUpdatePersona,
  FuncDeletePersona
}