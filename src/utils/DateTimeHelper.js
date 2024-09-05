
function getTodaysDate() {
    const today = new Date()
    return today.toISOString().split('T')[0]
}

module.exports = {
    getTodaysDate
};