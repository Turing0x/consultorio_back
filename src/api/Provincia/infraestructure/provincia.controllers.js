const ProvinciaQuerys = require('../querys/provincia.querys');
const toDoQuery = require('../../../database/execute');

const { 

  getIdOfExistingProvincie,
  FuncExistMunicipio,

  FuncSaveProvincia, FuncSaveMunicipio,
  
  FuncUpdateProvincia, 
  
  FuncDeleteProvincia, FuncDeleteMunicipio

} = require('../querys/provincia.functions');

const sendRes = require('../../../helpers/send.res');

const getAllProvincia = async(req, res) => {

  try {

    const result = await toDoQuery( ProvinciaQuerys.getAll )

    return sendRes(res, 200, true, 'mess_1', result.recordset)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const getAllMunicipios = async(req, res) => {

  try {

    const result = await toDoQuery( ProvinciaQuerys.getAllMunicipios )

    return sendRes(res, 200, true, 'mess_1', result.recordset)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const saveProvincia = async( req, res ) => {

  try {

    let { codigoSNS, nombreP, cantConsultorio = 0, codigoM, nombreM } = req.body

    const existProvicnia = await FuncExistMunicipio(
      ProvinciaQuerys.checkIfExistProvincia, nombreP)

    const existMunicipio = await FuncExistMunicipio(
      ProvinciaQuerys.checkIfExistMunicipio, nombreM)

    if( existMunicipio.recordset[0].IsEmpty === 'false' ){
      return sendRes(res, 500, false, 'municipality_mess_0', '')
    }

    if( existProvicnia.recordset[0].IsEmpty === 'true' ){

      await FuncSaveProvincia( 
        ProvinciaQuerys.addNewProvincia,
        codigoSNS, nombreP, cantConsultorio )

      await FuncSaveMunicipio( 
        ProvinciaQuerys.addNewMunicipio,
        codigoM, nombreM, codigoSNS )

      return sendRes(res, 200, true, 'provincie_mess_0', '')

    }

    getExisting = await getIdOfExistingProvincie( 
      ProvinciaQuerys.getIdOfExistingProvincie, nombreP )

    await FuncSaveMunicipio( 
      ProvinciaQuerys.addNewMunicipio,
      codigoM, nombreM, getExisting.recordset[0].codigoSNS )

    return sendRes(res, 200, true, 'provincie_mess_0', '')

  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const updateProvincia = async( req, res ) => {

  try {
    
    const { codigoSNS } = req.params
    const { nombreP, cantConsultorio, codigoM, nombreM } = req.body

    await FuncUpdateProvincia( 
      ProvinciaQuerys.updateProvincia,
      codigoSNS, nombreP, cantConsultorio, codigoM, nombreM )

    return sendRes(res, 200, true, 'provincie_mess_1', '')
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const deleteProvincia = async( req, res ) => {

  try {
    
    const { codigoSNS } = req.params

    await FuncDeleteProvincia( 
      ProvinciaQuerys.deleteProvinciaByCodigo, codigoSNS )
    
    await FuncDeleteMunicipio( 
      ProvinciaQuerys.deleteMunicipioByCodigo, codigoSNS )

    return sendRes(res, 200, true, 'provincie_mess_2', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

module.exports = {
  getAllMunicipios,
  getAllProvincia,
  saveProvincia,
  updateProvincia,
  deleteProvincia
}