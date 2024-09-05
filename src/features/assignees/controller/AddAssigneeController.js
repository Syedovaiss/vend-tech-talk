const FakeDatabase = require('../../../database/FakeDatabase')
const AssigneeDto = require('../model/AssigneeDto')
const uuid = require('uuid')

exports.addAssignee = async(req, res) => {
    const database = new FakeDatabase()
    if(req.body.name == '' || req.body.name == null || req.body.name == undefined) {
        return  res.status(400).json( {
            message: "Name Can't be empty!"
        })
    }
    if(req.body.role == '' || req.body.role == null || req.body.role == undefined) {
        return  res.status(400).json( {
            message: "Role Can't be empty!"
        })
    }
    if(req.body.domain == '' || req.body.domain == null || req.body.domain == undefined) {
        return  res.status(400).json( {
            message: "Domain Can't be empty!"
        })
    }
    const assignee = new AssigneeDto(
        uuid.v4(),
        req.body.name,
        req.body.role,
        req.body.domain
    )
    database.addAssignee(assignee)
    res.status(201).json( {
        message: "Assignee Added!",
        data: assignee
    })
}