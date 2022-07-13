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
    res.send("Hello there!")
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