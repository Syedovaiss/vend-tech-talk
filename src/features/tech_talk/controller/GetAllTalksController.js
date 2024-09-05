
const FakeDatabase = require('../../../database/FakeDatabase')


exports.allTalks = (req, res) => {
    const database = new FakeDatabase()
    let responseMessage = ''
    if(database.getAllTalks() == []) {
        responseMessage = "No talks available!"
    } else {
        responseMessage = "Talks Available!"
    }
    res.status(200).json({
        message: responseMessage,
        talks: database.getAllTalks()
    })
}