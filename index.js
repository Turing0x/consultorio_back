require('dotenv').config()
require('./src/database/connections')

const Server = require('./src/models/server')
const server = new Server()

server.listen()