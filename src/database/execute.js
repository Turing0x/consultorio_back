const DbConnect = require('./connections');

const toDoQuery = async( query = '' ) => {

  const pool = await DbConnect()
  const result = await pool.request().query( query )

  return result

}

module.exports = toDoQuery