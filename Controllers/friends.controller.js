const model = require('../models/friends.model')

// route for posting to the friends address
function postFriend (req,res) {
    if (!req.body.name) {
        return res.status(400).json({
            Error: "No friend name included in request"
        })
    }
    const newFriend = {
        id: model.length,
        name: req.body.name
        }
    model.push(newFriend)
    res.status(200).json(newFriend)
    console.log(model)
    }

// route for getting the full list of friends
function getFriends (req,res) {
    console.log(model)
    res.json(model)
}

// route for getting a specific friend based upon the parameter entered after : in the parsed address
function getFriend (req,res) {
    // after the : above, Express will take whatever parameter comes here as the location to search
    const friendID = Number(req.params.friendID)
    const friend = model[friendID]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: 'Friend at this address does not exist'
        });
    }
}

module.exports = {
    postFriend,
    getFriends,
    getFriend
}