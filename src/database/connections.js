const sql = require('mssql');

const dbSettings = {

  user: 'dbuci',
  password: 'dbuci',
  server: '127.0.0.1',
  database: 'dbUCI_consultorio',
  options: {
    encrypt: false,
    trustServerCertificate: true
  }

}

async function getConnection() {
  
  try {
  
    const pool = await sql.connect(dbSettings)
    return pool
  
  } catch (error) { console.log(error); }

} 

module.exports = getConnection