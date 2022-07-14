const express = require('express')
const app = express()
const messagesController = require('./Controllers/messages.controller')
const friendsController = require('./Controllers/friends.controller')

const PORT = 3000

const friends = [
    {
        id: 0,
        Name: "John"
    },
    {
        id: 1,
        Name: "JinJing"
    },
    {
        id: 2,
        Name: "Virgil"
    }
]

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

// route for posting to the friends address
app.post('/friends', (req,res) => {
    if (!req.body.name) {
        return res.status(400).json({
            Error: "No friend name included in request"
        })
    }
    const newFriend = {
        id: friends.length,
        name: req.body.name
        }
    friends.push(newFriend)
    res.status(200).json(newFriend)
    console.log(friends)
    }
)

// route for getting the full list of friends
app.get('/friends', (req,res) => {
    console.log(friends)
    res.json(friends)
})

// route for getting a specific friend based upon the parameter entered after : in the parsed address
app.get('/friends/:friendID', (req,res)=>{
    // after the : above, Express will take whatever parameter comes here as the location to search
    const friendID = Number(req.params.friendID)
    const friend = friends[friendID]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: 'Friend at this address does not exist'
        });
    }
})

app.get('/messages', messagesController.getMessages)

app.post('/messages', messagesController.postMessage)


// set listening to port
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})