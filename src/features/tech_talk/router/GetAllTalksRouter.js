const express = require('express')
const router = express.Router()
const controller = require('../controller/GetAllTalksController')

router.get('/talks',controller.allTalks)

module.exports = router