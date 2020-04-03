const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, '../data/db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const app = server.listen(3000, () => {
  console.log('JSON Server is running')
})

module.exports.app = app