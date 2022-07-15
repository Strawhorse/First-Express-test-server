const express = require('express')

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 3000

const app = express();

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

// routes using express.Router to group together similar requests in a mini-app
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


// set listening to port
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})