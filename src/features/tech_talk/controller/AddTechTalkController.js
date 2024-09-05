const TechTalkDto = require('../model/TechTalkDto')
const uuid = require('uuid')
const FakeDatabase = require('../../../database/FakeDatabase')
const moment = require('moment')

exports.addTalk = (req, res) => {
    const database = new FakeDatabase();
    if (req.body.name == '' || req.body.name == null || req.body.name == undefined) {
        return res.status(400).json(
            {
                message: "Please enter a valid name!"
            }
        )
    }
    if (req.body.description == '' || req.body.description == null || req.body.description == undefined) {
        return res.status(400).json(
            {
                message: "Please enter a valid description!"
            }
        )
    }
    if (req.body.assignee == '' || req.body.assignee == null || req.body.assignee == undefined) {
        return res.status(400).json(
            {
                message: "Please enter a valid assignee!"
            }
        )
    }
    
    const techTalk = new TechTalkDto(
        uuid.v4(),
        req.body.name,
        req.body.date ? req.body.date: `${moment().format('DD MMM, YYYY')}`,
        req.body.time ? req.body.time: `${moment().format('hh:mm A')}`,
        req.body.description,
        req.body.assignee
    );
    database.addTalk(techTalk)
    res.status(201).json({
        message: `${req.body.name} Added Successfully!`,
        data: techTalk
    })
}