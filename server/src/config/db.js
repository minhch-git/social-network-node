import mongoose from 'mongoose'
import { mongodb_url } from './env.config'
import logger from './logger'

const connect = async () => {
  const options = {}
  const conn = await mongoose.connect(mongodb_url, options)
  logger.info(`MongDB Connected: ${conn.connection.host}`.yellow.bold.underline)
}
export default { connect }
