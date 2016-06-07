var router = require('./MainRouter')

var installer = function(app) {
  app.use(['/'], router)
}

module.exports = installer
