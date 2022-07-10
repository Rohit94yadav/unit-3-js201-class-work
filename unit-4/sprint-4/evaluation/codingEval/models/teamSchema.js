const mongoose = require('mongoose');

const teamSchema = mongoose.Schema(
    {
        "teamName": {
            type: String,
            required: true
        },
        "noOfMembers": Number,
        "country": {
            type: String,
            required: true
        },
        "medalsWon": String,
        "typesOfMedals": [String],
        "participatedIn": [String]
    }
)

const Teams = mongoose.model('teams', teamSchema);

module.exports = Teams;