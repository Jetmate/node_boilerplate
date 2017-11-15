import helmet from 'helmet'
import express from 'express'
import handlebars from 'hbs'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import path from 'path'

const WWW = path.join(__dirname, '../www')

const app = express()
if (process.env.NODE_ENV === 'production') {
  app.listen(3002, '127.0.0.1')
  console.log('RUNNING ON http://127.0.0.1:3002/')
} else {
  app.listen(3000, '127.0.0.1')
  console.log('RUNNING ON http://0.0.0.0:3000/')
}

app.set('view engine', 'html')
app.engine('html', handlebars.__express)
app.set('views', WWW)

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['23jflkjaf', 'd329fjwae', '3419245'] }))
