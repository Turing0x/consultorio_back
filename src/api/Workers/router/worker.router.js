const { Router } = require('express')
const WorkerControllers = require('../infraestructure/worker.controllers')

const router = Router()

router

  .get('/', WorkerControllers.getAllWorker)

  .post('/', WorkerControllers.saveWorker)

  .put('/:CI', WorkerControllers.updateWorker)

  .delete('/:CI', WorkerControllers.deleteWorker)

module.exports.WorkerRouter = router
