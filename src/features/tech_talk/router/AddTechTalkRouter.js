const express = require('express')
const router = express.Router()
const controller = require('../controller/AddTechTalkController')

router.post('/add-talk',controller.addTalk)

module.exports = router