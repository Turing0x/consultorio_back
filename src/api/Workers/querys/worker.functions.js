const DbConnect = require('../../../database/connections');
const sql = require('mssql');

const FuncSaveWorker = async( query = '', worker ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('regMed', sql.VarChar, worker.regMed)
    .input('name', sql.VarChar, worker.name)
    .input('address', sql.VarChar, worker.address)
    .input('phoneNumber', sql.VarChar, worker.phoneNumber)
    .input('annoGrad', sql.VarChar, worker.annoGrad)
    .input('esEspecialista', sql.Numeric, worker.esEspecialista)
    .input('annoExp', sql.Int, worker.annoExp)
    .input('categoria', sql.VarChar, worker.categoria)
    .input('esMedico', sql.Numeric, worker.esMedico)
    .input('esEnfermera', sql.Numeric, worker.esEnfermera)
    .input('suConsultorio', sql.VarChar, worker.suConsultorio)
    .query( query )

  return result

}

const FuncUpdateWorker = async( query = '', worker ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('regMed', sql.VarChar, worker.regMed)
    .input('name', sql.VarChar, worker.name)
    .input('address', sql.VarChar, worker.address)
    .input('phoneNumber', sql.Int, worker.phoneNumber)
    .input('annoGrad', sql.VarChar, worker.annoGrad)
    .input('esEspecialista', sql.VarChar, worker.esEspecialista)
    .input('annoExp', sql.VarChar, worker.annoExp)
    .input('categoria', sql.VarChar, worker.categoria)
    .input('esMedico', sql.VarChar, worker.esMedico)
    .input('esEnfermera', sql.VarChar, worker.esEnfermera)
    .input('suConsultorio', sql.VarChar, worker.suConsultorio)
    .query( query )

  return result

}

const FuncDeleteWorker = async( query = '', regMed ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('regMed', sql.VarChar, regMed)
    .query( query )

  return result

}

module.exports = {
  FuncSaveWorker,
  FuncUpdateWorker,
  FuncDeleteWorker
}