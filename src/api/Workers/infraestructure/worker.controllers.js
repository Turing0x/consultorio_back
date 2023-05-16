const WorkerQuerys = require('../querys/worker.querys');
const toDoQuery = require('../../../database/execute');

const { 
  FuncSaveWorker, 
  FuncUpdateWorker, 
  FuncDeleteWorker } = require('../querys/worker.functions');

const sendRes = require('../../../helpers/send.res');

const getAllWorker = async(req, res) => {

  try {

    const result = await toDoQuery( WorkerQuerys.getAll )

    return sendRes(res, 200, true, 'mess_1', result.recordset)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const saveWorker = async( req, res ) => {

  try {

    const { regMed, name, address, phoneNumber, annoGrad, 
      esEspecialista, annoExp, categoria, esMedico, 
      esEnfermera, suConsultorio } = req.body

    const workerObj = {
      regMed, name, address, phoneNumber, annoGrad, esEspecialista,
      annoExp, categoria, esMedico, esEnfermera, suConsultorio
    }

    const result = await FuncSaveWorker( 
      WorkerQuerys.addNewWorker,
      workerObj )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const updateWorker = async( req, res ) => {

  try {
    
    const { CI } = req.params
    const { nombre, fechaNac, edad, sexo, ocupacion, suEnfermedad } = req.body

    const result = await FuncUpdateWorker( 
      WorkerQuerys.updateWorker,
      CI, nombre, fechaNac,
      edad, sexo, ocupacion, suEnfermedad )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const deleteWorker = async( req, res ) => {

  try {
    
    const { CI } = req.params

    const result = await FuncDeleteWorker( 
      WorkerQuerys.deleteWorkerByCI, CI )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

module.exports = {
  getAllWorker,
  saveWorker,
  updateWorker,
  deleteWorker
}