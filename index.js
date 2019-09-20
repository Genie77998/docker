const Koa = require('koa')
const app = new Koa()
const logger = console
app.use(async (ctx) => {
  ctx.body = 'hello world'
})

app.on('error', (err, ctx) => {
  logger.error('koa error:', JSON.stringify(err.stack))
  ctx.status = 500
  ctx.body = 'server error'
})

const PORT = 80

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`node server is running at ${PORT}`)
})

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason)
})

process.on('uncaughtException', err => {
  logger.error('uncaughtException', err.stack)
})

process.on('exit', () => {
  logger.info('node process exit')
})
