const express = require('express')
const app = express()
const messagesController = require('./controllers/messages.controller')
const friendsController = require('./controllers/friends.controller')

const PORT = 3000

// add middleware to register how long request took
app.use((req,res,next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`)
    // always call next() function or middleware will not release request and it will time out
})

// middleware which looks at Content-Type and parses it if it is json, so can then be added to our list of contacts
app.use(express.json())


app.post('/friends', friendsController.postFriend)
app.get('/friends', friendsController.getFriends)
app.get('/friends/:friendID', friendsController.getFriend)

app.get('/messages', messagesController.getMessages)
app.post('/messages', messagesController.postMessage)


// set listening to port
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})