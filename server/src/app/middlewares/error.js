import createError, { HttpError } from 'http-errors'
import logger from '../../config/logger'

const errorHandler = (err, req, res, next) => {
  let error = { ...err }

  error.message = err.message

  // Log to console for dev
  logger.error(err)

  // Yup validator errors
  if (Array.isArray(err.message)) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
    })
  }

  if (err instanceof HttpError) {
    error.statusCode = err.statusCode
  }

  if (err.name === 'CastError') {
    // Mongoose bad ObjectId
    const message = `Resource not found`
    error = new createError.NotFound(message)
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered'
    error = new createError.BadRequest(message)
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message)
    error = new createError.BadRequest(message)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error:
      (error.statusCode && error.message) ||
      createError.InternalServerError().message,
  })
}

export default errorHandler
