const mongoose = require('mongoose');

const playerSchema = mongoose.Schema(
    {
        "playerName": String,
        "gender": String,
        "country": {
            type: String,
            required: true
        },
        "participatedIn": [String],
        "medalsWon": Number,
        "typesOfMedal": [String]
    }
)

const Players = mongoose.model('players', playerSchema);

module.exports = Players;