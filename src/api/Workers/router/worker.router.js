const { Router } = require('express')
const WorkerControllers = require('../infraestructure/worker.controllers')

const router = Router()

router

  .get('/', WorkerControllers.getAllWorker)
  .get('/:clinicId', WorkerControllers.getAllWorkerOfAClinic)

  .post('/', WorkerControllers.saveWorker)

  .put('/:wokerId', WorkerControllers.updateWorker)

  .delete('/:wokerId', WorkerControllers.deleteWorker)

module.exports.WorkerRouter = router
