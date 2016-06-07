// Server deps
const express = require('express')
const http = require('http')

// Page installers
const installMain = require('./main/MainInstaller')

// Define our app
const app = express()

// Using nunjucks for html templating
const nunjucks = require('nunjucks')
nunjucks.configure('src', { watch:true })

// Get this thing going
const server = http.createServer(app)
server.listen(3000)
app.use(express.static('build'))

// Install the page
installMain(app)
