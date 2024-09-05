const express = require('express')
const router = express.Router()
const controller = require('../controller/AddAssigneeController')

router.post('/add-assignee',controller.addAssignee)

module.exports = router