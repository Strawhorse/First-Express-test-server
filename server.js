const express = require('express');
const { join } = require('path');
const path = require('path')

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const PORT = 3000

const app = express();

// set handlebars templating engine - using views folder
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'))

// add middleware to register how long request took
app.use((req,res,next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`)
    // always call next() function or middleware will not release request and it will time out
})

app.use('/site', express.static(path.join(__dirname, 'public')))
// middleware that serves everything under a particular relative path

// middleware which looks at Content-Type and parses it if it is json, so can then be added to our list of contacts
app.use(express.json())

// create a root route
app.get('/', (req,res) => {
    res.render('index', {
        title: 'Into the wild frontier',
        caption: 'Space',
    })
})

// routes using express.Router to group together similar requests in a mini-app
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);


// set listening to port
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})