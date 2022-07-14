function postMessage (req,res) {
    console.log("Updating messages...")
}

function getMessages (req, res) {
    res.send('<ul><li>Hi there!</li></ul>')
}

module.exports  = {
    getMessages,
    postMessage
}