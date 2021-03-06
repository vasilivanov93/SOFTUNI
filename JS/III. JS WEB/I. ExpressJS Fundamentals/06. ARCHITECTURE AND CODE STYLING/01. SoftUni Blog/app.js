const express = require('express')
const config = require('./config/config')
const app = express()

let env = 'development'
require('./config/database')(config[env])
require('./config/express')(app, config[env])
require('./config/passport')()
require('./config/routes')(app)

app.listen(3000, () => {console.log(`Run on port ${3000}: http://localhost:3000/`)})