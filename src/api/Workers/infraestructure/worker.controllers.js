const WorkerQuerys = require('../querys/worker.querys');
const toDoQuery = require('../../../database/execute');

const { 
  FuncSaveWorker, 
  FuncUpdateWorker,
  FuncSaveNurse,
  FuncSaveDoctor,
  FuncGetWorkerByClinicId,
  FuncDeleteWorker } = require('../querys/worker.functions');

const sendRes = require('../../../helpers/send.res');

const getAllWorker = async(req, res) => {

  try {

    const result = await toDoQuery( WorkerQuerys.getAll )

    return sendRes(res, 200, true, 'mess_1', result.recordset)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const getByOccupationWorker = async(req, res) => {

  try {

    const { occupation } = req.params

    console.log(occupation);

    let result

    ( occupation === '0')
      ? result = await toDoQuery( `SELECT * FROM PersonalSalud p JOIN Doctor d ON p.regNum = d.regNum WHERE p.regNum = d.regNum;` )

      : result = await toDoQuery( `SELECT * FROM PersonalSalud p JOIN Nurse n ON p.regNum = n.regNum WHERE p.regNum = n.regNum;` )

    return sendRes(res, 200, true, 'mess_1', result.recordset[0])
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const getAllWorkerOfAClinic = async(req, res) => {

  try {

    const { clinicId } = req.params
    let finalResult = []

    const result = await FuncGetWorkerByClinicId(
      WorkerQuerys.getAllByClinic,
      clinicId
    )

    // Recorrer los resultados de la consulta
    for (let i = 0; i < result.recordsets.length; i++) {

      for (let key in result.recordsets[i]) {
        finalResult.push(result.recordsets[i][key]);
      }

    }

    return sendRes(res, 200, true, 'mess_1', finalResult)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const saveWorker = async( req, res ) => {

  try {

    const { regMed, name, address, phoneNumber, annoGrad, 
      esEspecialista, anno_exp, category, suConsultorio, occupation } = req.body

    const workerObj = { regMed, name, address, phoneNumber, suConsultorio }
    const doctorObj = { regMed, annoGrad, esEspecialista }
    const nurseObj = { regMed, anno_exp, category }

    const result = await FuncSaveWorker( 
      WorkerQuerys.addNewWorker,
      workerObj )

    if( occupation === 1 ){
      
      await FuncSaveDoctor( 
        WorkerQuerys.addDoctor,
        doctorObj )

      return sendRes(res, 200, true, 'mess_1', result)
    
    }

    await FuncSaveNurse(
      WorkerQuerys.addNurse,
      nurseObj )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const updateWorker = async( req, res ) => {

  try {
    
    const { wokerId } = req.params
    const { nombre, fechaNac, edad, sexo, ocupacion, suEnfermedad } = req.body

    const result = await FuncUpdateWorker( 
      WorkerQuerys.updateWorker,
      wokerId, nombre, fechaNac,
      edad, sexo, ocupacion, suEnfermedad )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const deleteWorker = async( req, res ) => {

  try {
    
    const { wokerId, occupation } = req.params

    const result = await FuncDeleteWorker( 
      WorkerQuerys.deleteWorkerByCI, wokerId )

    ( occupation === 0 )
      ? await toDoQuery( `DELETE FROM Doctor where regNum = ${wokerId}` )
      : await toDoQuery( `DELETE FROM Nurse where regNum = ${wokerId}` )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

module.exports = {
  getAllWorkerOfAClinic,
  getByOccupationWorker,
  getAllWorker,
  updateWorker,
  deleteWorker,
  saveWorker
}