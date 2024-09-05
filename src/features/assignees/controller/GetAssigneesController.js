const FakeDatabase = require('../../../database/FakeDatabase')

exports.getAssignees =  async(req, res) => {
    const database = new FakeDatabase()
    let responseMessage = ''
    if(database.getAssignees() == []) {
        responseMessage = "No Assignee available!"
    } else {
        responseMessage = "Assignees Available!"
    }
    res.status(200).json({
        message: responseMessage,
        assignee: database.getAssignees()
    })
}