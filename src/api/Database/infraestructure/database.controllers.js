const toDoQuery = require('../../../database/execute');
const sendRes = require('../../../helpers/send.res');

const makeRandomQuery = async( req, res ) => {

  try {

    const { customQuery = ''} = req.body

    const result = await toDoQuery( customQuery )

    sendRes(res, 200, true, 'database_mess_1', result)
    
  } catch (error) { sendRes(res, 500, false, 'database_mess_0', error.message) }

}

const createTable = async( req, res ) => {

  try {

    // CREATE TABLE Persona( ID VARCHAR(50) PRIMARY KEY, nombre VARCHAR(50) NOT NULL, fechaNac DATE NOT NULL, edad INT NOT NULL, sexo VARCHAR(50) NOT NULL, ocupacion VARCHAR(50) NOT NULL)

    const { customQuery = ''} = req.body

    const result = await toDoQuery( customQuery )

    sendRes(res, 200, true, 'database_mess_1', result)
    
  } catch (error) { sendRes(res, 500, false, 'database_mess_0', error.message) }

}

module.exports = {
  makeRandomQuery,
  createTable
}