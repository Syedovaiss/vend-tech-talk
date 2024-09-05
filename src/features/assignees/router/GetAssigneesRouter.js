const express = require('express')
const router = express.Router()
const controller = require('../controller/GetAssigneesController')

router.get('/assignees',controller.getAssignees)

module.exports = router