function postMessage (req,res) {
    console.log("Updating messages...")
    res.status(200).json("Updating messages...")
}

function getMessages (req, res) {
    res.send('<ul><li>Hi there!</li></ul>')
}

module.exports  = {
    getMessages,
    postMessage
}