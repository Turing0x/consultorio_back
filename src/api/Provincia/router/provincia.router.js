const { Router } = require('express')
const ProvinciaControllers = require('../infraestructure/provincia.controllers')

const router = Router()

router

  .get('/', ProvinciaControllers.getAllProvincia)
  .get('/municipios/', ProvinciaControllers.getAllMunicipios)

  .post('/', ProvinciaControllers.saveProvincia)

  .put('/:codigoSNS', ProvinciaControllers.updateProvincia)

  .delete('/:codigoSNS', ProvinciaControllers.deleteProvincia)

module.exports.ProvinciaRouter = router
