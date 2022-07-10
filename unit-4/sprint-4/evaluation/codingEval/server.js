const express = require('express');
const mongoose = require('mongoose');
const Sports = require('./models/sportsSchema');
const Schedule = require('./models/scheduleSchema');
const Players = require('./models/playerSchema');
const {CountryLeaderBoard, PlayerLeaderBoard} = require('./models/leaderBoardSchema');

const app = express();
app.use(express.json());

const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/olympicDbs", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

app.get('/olympics/sports', async (req, res)=>{
    const allSports = await Sports.find().lean().exec()
    res.status(200).json(allSports);
});

app.get('/olympics/sports/teamsports', async(req, res)=>{
    const teamSports = await Sports.find({"typeOfSport": "team"}).lean().exec();
    res.status(200).json(teamSports);
})

app.get('/olympics/sports/individualsports', async(req, res)=>{
    const teamSports = await Sports.find({"typeOfSport": "individual"}).lean().exec();
    res.status(200).json(teamSports);
})

app.get('/olympics/sports/teamsports/:numberOfPlayers', async(req, res)=>{
    const minPlayers = +req.params.numberOfPlayers;
    const teamSports = await Sports.find({"minPlayersInATeam": {$gt: minPlayers}}).lean().exec();
    res.status(200).json(teamSports);
})

app.get('/olympics/players', async(req, res)=>{
    const players = await Players.find().populate("participatedIn").lean().exec();
    res.status(200).json(players);
})

app.get('/olympics/players/:id/participatedIn', async (req, res)=>{
    const id = req.params.id;
    const player = await Players.find({"_id": id}, {_id: 0, name: 0, gender: 0, country: 0, medalsWon: 0, typesOfMedals: 0}).lean().exec();
    const allSports = await Sports.find().lean().exec()
    res.status(200).json({"participatedIn": player, "soprts": allSports});
})

app.get('/olympics/leaderboard/country', async (req, res)=>{
    const countryLeaderboard = await CountryLeaderBoard.find().sort({medalsWon: -1}).lean.exec;
    res.status(200).json(countryLeaderboard);
})

app.get('/olympics/leaderboard/player', async (req, res)=>{
    const playerLeaderboard = await PlayerLeaderBoard.find().sort({medalsWon: -1}).lean.exec;
    res.status(200).json(playerLeaderboard);
})


app.get('olympics/schedule/:typeOfMatch', async (req, res)=>{
    const type = req.params.typeOfMatch;
    const schedule = await Schedule.find({typeOfMatch: type}).lean().exec();
    res.status(200).json(schedule);
})

const start = async ()=>{
    await connect();
    app.listen(5000, ()=>{
        console.log('listening to port 5000');
    })
}

start();