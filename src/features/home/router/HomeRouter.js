const express = require('express')
const router = express.Router()
const controller = require('../controller/HomeController')


router.get('/', controller.getHome)

module.exports = router