const { Router } = require('express')
const ClinicControllers = require('../infraestructure/clinic.controllers')

const router = Router()

router

  .get('/', ClinicControllers.getAllClinic)

  .post('/', ClinicControllers.saveClinic)
  .post('/signIn', ClinicControllers.signIn)

  .put('/:CI', ClinicControllers.updateClinic)

  .delete('/:CI', ClinicControllers.deleteClinic)

module.exports.ClinicRouter = router