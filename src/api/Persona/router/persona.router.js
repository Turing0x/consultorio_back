const { Router } = require('express')
const PersonaControllers = require('../infraestructure/persona.controllers')

const router = Router()

router

  .get('/', PersonaControllers.getAllPersona)

  .post('/', PersonaControllers.savePersona)

  .put('/:CI', PersonaControllers.updatePersona)

  .delete('/:CI', PersonaControllers.deletePersona)

module.exports.PersonaRouter = router
