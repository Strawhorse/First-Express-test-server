const path = require('path')
// allow us to work with OS paths; just join function from path module


function postMessage (req,res) {
    console.log("Updating messages...")
    res.status(200).json("Updating messages...")
}

function getMessages (req, res) {
    // res.send('<ul><li>Hi there!</li></ul>')
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'space.jpg'))
}

module.exports  = {
    getMessages,
    postMessage
}