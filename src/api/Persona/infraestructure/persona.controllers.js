const PersonaQuerys = require('../querys/persona.querys');
const toDoQuery = require('../../../database/execute');

const { 
  FuncSavePersona, 
  FuncUpdatePersona, 
  FuncDeletePersona } = require('../querys/persona.functions');

const sendRes = require('../../../helpers/send.res');

const getAllPersona = async(req, res) => {

  try {

    const result = await toDoQuery( PersonaQuerys.getAll )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const savePersona = async( req, res ) => {

  try {

    const { CI, nombre, fechaNac, edad, sexo, ocupacion, suEnfermedad } = req.body

    const result = await FuncSavePersona( 
      PersonaQuerys.addNewPersona,
      CI, nombre, fechaNac,
      edad, sexo, ocupacion, suEnfermedad )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const updatePersona = async( req, res ) => {

  try {
    
    const { CI } = req.params
    const { nombre, fechaNac, edad, sexo, ocupacion, suEnfermedad } = req.body

    const result = await FuncUpdatePersona( 
      PersonaQuerys.updatePersona,
      CI, nombre, fechaNac,
      edad, sexo, ocupacion, zsuEnfermedad )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

const deletePersona = async( req, res ) => {

  try {
    
    const { CI } = req.params

    const result = await FuncDeletePersona( 
      PersonaQuerys.deletePersonaByCI, CI )

    return sendRes(res, 200, true, 'mess_1', result)
    
  } catch (error) { return sendRes(res, 500, false, 'mess_0', error.message) }

}

module.exports = {
  getAllPersona,
  savePersona,
  updatePersona,
  deletePersona
}