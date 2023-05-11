const { Router } = require('express')
const DatabaseControllers = require('../infraestructure/database.controllers')

const router = Router()

router

  .post('/', DatabaseControllers.makeRandomQuery)

module.exports.DatabaseRouter = router
