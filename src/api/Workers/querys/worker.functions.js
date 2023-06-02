const DbConnect = require('../../../database/connections');
const sql = require('mssql');

const FuncGetWorkerByClinicId = async( query = '', clinicId ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('clinicId', sql.VarChar, clinicId)
    .query( query )

  return result

}

const FuncSaveWorker = async( query = '', worker ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('regMed', sql.VarChar, worker.regMed)
    .input('name', sql.VarChar, worker.name)
    .input('address', sql.VarChar, worker.address)
    .input('phoneNumber', sql.VarChar, worker.phoneNumber)
    .input('suConsultorio', sql.VarChar, worker.suConsultorio)
    .query( query )

  return result

}

const FuncSaveNurse = async( query = '', nurse ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('regMed', sql.VarChar, nurse.regMed)
    .input('anno_exp', sql.Int, nurse.anno_exp)
    .input('category', sql.VarChar, nurse.category)
    .query( query )

  return result

}

const FuncSaveDoctor = async( query = '', doctor ) => {

  const pool = await DbConnect()
  const result = await pool.request()
    .input('regMed', sql.VarChar, doctor.regMed)
    .input('anno_grad', sql.Int, doctor.annoGrad)
    .input('es_especialista', sql.Numeric, doctor.esEspecialista)
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
  FuncGetWorkerByClinicId,
  FuncDeleteWorker,
  FuncUpdateWorker,
  FuncSaveWorker,
  FuncSaveDoctor,
  FuncSaveNurse
}