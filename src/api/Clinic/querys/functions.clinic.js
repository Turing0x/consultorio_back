const DbConnect = require('../../../database/connections');
const sql = require('mssql');

const getIdOfExistingClinic = async( query = '', nombre ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('nombre', sql.VarChar, nombre)
    .query( query )

  return result

}

const FuncGetClinicById = async( query = '', codigo ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigo', sql.VarChar, codigo)
    .query( query )

  return result

}

const FuncExistClinic = async( query = '', nombre ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('nombre', sql.VarChar, nombre)
    .query( query )

  return result

}

const FuncCheckPassword = async( query = '', nombre, password ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('nombre', sql.VarChar, nombre)
    .input('password', sql.VarChar, password)
    .query( query )

  return result

}

const FuncSaveClinic = async( query = '', codigo, nombre, password, direccion, tipo, tipoLocal, suMunicipio ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigo', sql.VarChar, codigo)
    .input('nombre', sql.VarChar, nombre)
    .input('password', sql.VarChar, password)
    .input('direccion', sql.VarChar, direccion)
    .input('tipo', sql.Int, tipo)
    .input('tipoLocal', sql.VarChar, tipoLocal)
    .input('suMunicipio', sql.VarChar, suMunicipio)
    .query( query )

  return result

}

const FuncUpdateClinic = async( query = '', codigo, nombre, password, direccion, tipo, tipoLocal, suMunicipio ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigo', sql.VarChar, codigo)
    .input('nombre', sql.VarChar, nombre)
    .input('password', sql.VarChar, password)
    .input('direccion', sql.VarChar, direccion)
    .input('tipo', sql.Int, tipo)
    .input('tipoLocal', sql.Int, tipoLocal)
    .input('suMunicipio', sql.VarChar, suMunicipio)
    .query( query )

  return result

}

const FuncDeleteClinic = async( query = '', CI ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigo', sql.VarChar, CI)
    .query( query )

  return result

}

module.exports = {
  getIdOfExistingClinic,
  FuncCheckPassword,
  FuncUpdateClinic,
  FuncDeleteClinic,
  FuncExistClinic,
  FuncSaveClinic,
  FuncGetClinicById
}