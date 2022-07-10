const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/movies", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
};

const movieSchema = mongoose.Schema(
    {
        movieName: String,
        movieGenre: String,
        productionYear: Number,
        budget: Number
    },
    {
        versionKey: false
    }
);

const Movies = mongoose.model("movies", movieSchema);

app.get('/movies', async (req, res)=>{
    const mov = await Movies.find().lean().exec();
    res.status(200).json({data: mov})
});

app.get('/movies/:id', async (req, res)=>{
    const id = req.params.id;
    const mov = await Movies.findById(id);
    res.status(200).json({data: mov})
});

app.post('/movies', async (req, res)=>{
    const mov = await Movies.create(req.body);
    res.status(201).json({data: mov})
});

app.patch('/movies/:id', async (req, res)=>{
    const id = req.params.id;
    const mov = await Movies.findByIdAndUpdate(id, req.body, {new: true});
    res.status(203).json({data: mov})
});

app.delete('/movies/:id', async(req, res)=>{
    const id = req.params.id;
    await Movies.findByIdAndDelete(id);
    const mov = await Movies.find().lean().exec();
    res.status(200).json(mov)
})

const start = async()=>{
    await connect();
    app.listen(5000, ()=>{
        console.log('listening to port 5000');
    })
}

start();