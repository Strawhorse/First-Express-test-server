const express = require('express')
const app = express()
const PORT = 3000

const friends = [
    {
        id: 1,
        Name: "John"
    },
    {
        id:2,
        Name: "JinJing"
    },
    {
        id: 3,
        Name: "Virgil"
    }
]

app.get('/', (req,res) => {
    res.json(friends)
})

app.get('/friends/:friendID', (req,res)=>{
    // after the : above, Express will take whatever parameter comes here as the location to search
    const friendID = Number(req.params.friendID)
    const friend = friends[friendID]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: "Friend at this address does not exist"
        });
    }
})

app.get('/message', (req,res) => {
    res.send('<ul>Hi there in HTML languages</ul>')
})

app.post('/message', (req,res) => {
    console.log("Updating messages...")
})




app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})