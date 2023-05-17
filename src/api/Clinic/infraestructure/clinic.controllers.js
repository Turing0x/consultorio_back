const ClinicQuerys = require('../querys/clinic.querys');
const ProvinciaFuntions = require('../../Provincia/querys/provincia.functions');

const toDoQuery = require('../../../database/execute');
const bcrypt = require('bcrypt')

const { 
  getIdOfExistingClinic,
  FuncCheckPassword,
  FuncUpdateClinic, 
  FuncDeleteClinic,
  FuncExistClinic,
  FuncSaveClinic, 
  FuncGetClinicById } = require('../querys/functions.clinic');

const sendRes = require('../../../helpers/send.res');

const getAllClinic = async(req, res) => {

  try {

    const result = await toDoQuery( ClinicQuerys.getAll )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const getClinicById = async(req, res) => {

  try {

    const { codigo } = req.params

    const result = await FuncGetClinicById(
      ClinicQuerys.getInfoToSign, codigo)

    return sendRes(res, 200, true, 'mess_1', ...result.recordset)
    
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
    // const hashPassword = await bcrypt.hash(password, 10)

    const result = await FuncSaveClinic(
      ClinicQuerys.addNewClinic, 
      codigo, nombre, password, direccion, 
      tipo, tipoLocal, idMunicipio.recordset[0].codigo, password)

    return sendRes(res, 200, true, 'clinic_mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const updateClinic = async( req, res ) => {

  try {
    
    const { codigo } = req.params
    const { nombre, password, direccion, tipo, tipoLocal, suMunicipio } = req.body

    const findedClinic = await toDoQuery( `SELECT * FROM Consultorio WHERE codigo = '${codigo}';` ) 

    const result = await FuncUpdateClinic(
      ClinicQuerys.updateClinic,
      codigo,
      nombre ?? findedClinic.recordset[0].nombre,
      password ?? findedClinic.recordset[0].password,
      direccion ?? findedClinic.recordset[0].direccion, 
      tipo ?? findedClinic.recordset[0].tipo, 
      tipoLocal ?? findedClinic.recordset[0].tipoLocal,
      suMunicipio ?? findedClinic.recordset[0].suMunicipio) 

    return sendRes(res, 200, true, 'clinic_mess_2', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const deleteClinic = async( req, res ) => {

  try {
    
    const { codigo } = req.params

    const result = await toDoQuery( `DELETE FROM Consultorio WHERE codigo = '${codigo}';` ) 

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

module.exports = {
  getClinicById,
  getAllClinic,
  updateClinic,
  deleteClinic,
  saveClinic,
  signIn
}