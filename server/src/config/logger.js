import { createLogger, transports, format } from 'winston'
import { node_env } from './env.config.js'
const { combine, colorize, uncolorize, label, splat, printf } = format

// enumerate error
const enumerateErrorFormat = format(info => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack })
  }
  return info
})
const logConfiguration = {
  level: node_env === 'development' ? 'debug' : 'info',
  transports: [new transports.Console()],
  format: combine(
    enumerateErrorFormat(),
    node_env === 'development' ? colorize({ all: true }) : uncolorize(),
    label({
      label: __filename.split('/').pop(),
    }),
    splat(),
    printf(info => `${info.level}`.bold + `: ${info.message}`)
  ),
}

const logger = createLogger(logConfiguration)

export default logger
