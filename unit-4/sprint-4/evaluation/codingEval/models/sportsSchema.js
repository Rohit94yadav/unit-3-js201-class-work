const mongoose = require('mongoose');

const sportsSchema = mongoose.Schema(
    {
        "sportName": {
            type: String,
            required: true
        },
        "typeOfSport": {
            type: String,
            required: true
        },
        "minPlayersInATeam": Number,
        "teamsParicipated": Number,
        "participants": [String]
    }
)

const Sports = mongoose.model('sports', sportsSchema);

module.exports = Sports;