const express = require('express')
const api = express.Router()

const COLLECTIONS = require('../helpers/collections')

const { PersonaRouter } = require('../api/Persona/router/persona.router')
const { DatabaseRouter } = require('../api/Database/router/database.router')
const { ProvinciaRouter } = require('../api/Provincia/router/provincia.router')
const { ClinicRouter } = require('../api/Clinic/router/clinic.router')

api.use(`/${COLLECTIONS.PATIENT}`, PersonaRouter)
api.use(`/${COLLECTIONS.PROVINCIA}`, ProvinciaRouter)
api.use(`/${COLLECTIONS.DATABASE}`, DatabaseRouter)
api.use(`/${COLLECTIONS.CLINIC}`, ClinicRouter)

module.exports = api
