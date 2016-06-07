var express = require('express')
var nunjucks = require('nunjucks')

var router = express.Router()

router.get('/', function (req, res) {
  res.send(nunjucks.render('main/main.html', req.context))
})

module.exports = router
