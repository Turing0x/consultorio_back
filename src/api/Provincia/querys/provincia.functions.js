const DbConnect = require('../../../database/connections');
const ProvinciaQuerys = require('../querys/provincia.querys');

const sql = require('mssql');

const FuncSaveProvincia = async( query = '', codigoSNS, nombreP, cantConsultorio ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigoSNS', sql.VarChar, codigoSNS)
    .input('nombre', sql.VarChar, nombreP)
    .input('cantConsultorio', sql.Int, cantConsultorio)
    .query( query )

  return result

}

const getIdOfExistingProvincie = async( nombre ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('nombre', sql.VarChar, nombre)
    .query( ProvinciaQuerys.getIdOfExistingProvincie )

  return result

}

const getIdOfExistingMunicipio = async( nombre ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('nombre', sql.VarChar, nombre)
    .query( ProvinciaQuerys.getIdOfExistingMunicipio )

  return result

}

const FuncExistMunicipio = async( nombre ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('nombre', sql.VarChar, nombre)
    .query( ProvinciaQuerys.checkIfExistMunicipio )

  return result

}

const FuncSaveMunicipio = async( query = '', codigo, nombre, suProvincia ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigo', sql.VarChar, codigo)
    .input('nombre', sql.VarChar, nombre)
    .input('suProvincia', sql.VarChar, suProvincia)
    .query( query )

  return result

}

const FuncUpdateProvincia = async( query = '', codigoSNS, nombreP, cantConsultorio, codigoM, nombreM ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigoSNS', sql.VarChar, codigoSNS)
    .input('nombre', sql.VarChar, nombreP)
    .input('cantConsultorio', sql.Int, cantConsultorio)
    .input('codigo', sql.VarChar, codigoM)
    .input('nombre', sql.VarChar, nombreM)
    .query( query )

  return result

}

const FuncDeleteProvincia = async( query = '', codigoSNS ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigoSNS', sql.VarChar, codigoSNS)
    .query( query )

  return result

}

const FuncDeleteMunicipio = async( query = '', codigoSNS ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('codigoSNS', sql.VarChar, codigoSNS)
    .query( query )

  return result

}

module.exports = {

  getIdOfExistingProvincie,
  getIdOfExistingMunicipio,

  FuncExistMunicipio,

  FuncSaveProvincia,
  FuncSaveMunicipio,
  
  FuncUpdateProvincia,

  FuncDeleteProvincia,
  FuncDeleteMunicipio
}