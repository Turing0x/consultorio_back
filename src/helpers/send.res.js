const MESSAGES = require('./messages.defines')

const sendRes = (res, status, success, message, data = []) => {
  res.status(status).json({
    success,
    api_message: MESSAGES[message],
    data
  })
}

module.exports = sendRes
