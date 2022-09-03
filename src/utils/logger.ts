import winston from 'winston'

// Define the severity levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
}

// It it was run in production, show only warn and error messsages
const level = () => {
  const env = process.env.NODE_ENV || 'development'
  const isDevelopment = env === 'development'
  return isDevelopment ? 'debug' : 'warn'
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'blue',
  debug: 'white',
}

winston.addColors(colors)

// Chose the aspect of your log customizing format
const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
)

// Define the logger must use to print out messages.
const transports = [
  // Allow the use the console to print the messages
  new winston.transports.Console(),
  // Allow to print all the error level messages inside the error.log file
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  // Allow to print all the error message inside the all.log file
  // new winston.transports.File({ filename: 'logs/all.log' }),
]

// Instance that has to be exported
const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
  // format: winston.format.combine(
  //   winston.format.timestamp({
  //     format: 'YYYY-MM-DD HH:mm:ss:ms',
  //   }),
  //   winston.format.colorize({ all: true }),
  //   winston.format.prettyPrint()
  // ),
  
})

export default Logger