const ClinicQuerys = require('../querys/clinic.querys');
const ProvinciaFuntions = require('../../Provincia/querys/provincia.functions');

const toDoQuery = require('../../../database/execute');
const bcrypt = require('bcrypt')

const { 
  getIdOfExistingClinic,
  FuncCheckPassword,
  FuncExistClinic,
  FuncSaveClinic, 
  FuncUpdateClinic, 
  FuncDeleteClinic } = require('../querys/functions.clinic');

const sendRes = require('../../../helpers/send.res');

const getAllClinic = async(req, res) => {

  try {

    const result = await toDoQuery( ClinicQuerys.getAll )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const signIn = async(req, res) => {

  try {

    const { nombre, password } = req.body

    const existClinic = await FuncExistClinic(
      ClinicQuerys.checkIfExistClinic, nombre)

    if( existClinic.recordset[0].IsEmpty === 'true' ){
      return sendRes(res, 500, false, 'clinic_mess_4', '')
    }

    const result = await FuncCheckPassword( 
      ClinicQuerys.checkPassword, nombre, password)
    
    if( result.recordset[0][''] === 'false' ){
      return sendRes(res, 500, false, 'clinic_mess_6', '')
    }

    const clinicId = await getIdOfExistingClinic(
      ClinicQuerys.getIdOfExistingClinic, nombre )
    
    return sendRes(res, 200, true, 'clinic_mess_5', clinicId.recordset[0].codigo)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const saveClinic = async( req, res ) => {

  try {

    const { codigo, nombre, direccion, tipo, tipoLocal, suMunicipio, password } = req.body

    const existClinic = await FuncExistClinic(
      ClinicQuerys.checkIfExistClinic, nombre)

    if( existClinic.recordset[0].IsEmpty === 'false' ){
      return sendRes(res, 500, false, 'clinic_mess_0', '')
    }

    const idMunicipio = await ProvinciaFuntions.getIdOfExistingMunicipio( suMunicipio )
    const hashPassword = await bcrypt.hash(password, 10)

    const result = await FuncSaveClinic(
      ClinicQuerys.addNewClinic, 
      codigo, nombre, direccion, 
      tipo, tipoLocal, idMunicipio.recordset[0].codigo, hashPassword)

    return sendRes(res, 200, true, 'clinic_mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const updateClinic = async( req, res ) => {

  try {
    
    const { codigo } = req.params
    const { nombre, direccion, tipo, tipoLocal } = req.body

    const idMunicipio = await ProvinciaFuntions.getIdOfExistingMunicipio( direccion )

    const result = await FuncUpdateClinic( 
      ClinicQuerys.updateClinic,
      codigo, nombre, idMunicipio, tipo, tipoLocal )

    return sendRes(res, 200, true, 'clinic_mess_2', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const deleteClinic = async( req, res ) => {

  try {
    
    const { CI } = req.params

    const result = await FuncDeleteClinic( 
      ClinicQuerys.deleteClinicBycodigo, CI )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

module.exports = {
  getAllClinic,
  saveClinic,
  updateClinic,
  deleteClinic,
  signIn
}