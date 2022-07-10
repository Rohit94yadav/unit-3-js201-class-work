const mongoose = require('mongoose');

const CountryleaderBoardSchema = mongoose.Schema(
    {
        'countryName': String,
        "medalsWon": Number
    }
)

const CountryLeaderBoard = mongoose.model('countryLearderBoard', CountryleaderBoardSchema);

const PlayerLeaderBoardSchema = mongoose.Schema(
    {
        'playerId': String,
        'medalsWon': String
    }
)

const PlayerLeaderBoard = mongoose.model('playerLeaderBoard', PlayerLeaderBoardSchema);

module.exports = {CountryLeaderBoard, PlayerLeaderBoard};